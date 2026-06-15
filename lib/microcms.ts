import { createClient, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import markdownToHtml from "zenn-markdown-html";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type MicroCMSBlog = MicroCMSListContent & {
  title: string;
  tags: string;
  excerpt?: string;
  coverImage?: MicroCMSImage;
  body: string;
  url?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  content: string;
  url?: string;
};

const POSTS_PER_PAGE = 6;

function buildExcerpt(content: string): string {
  return content
    .replace(/^#+\s+.+$/gm, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.+?)\]\(.*?\)/g, "$1")
    .replace(/[*_`>#~\-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)));
}

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; syu-blog-ogp-fetcher/1.0; +https://syu-blog.dev)",
      },
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const html = await res.text();
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    if (!match) return null;
    try {
      return new URL(decodeHtmlEntities(match[1]), url).toString();
    } catch {
      return null;
    }
  } catch {
    return null;
  }
}

async function toPost(blog: MicroCMSBlog): Promise<Post> {
  const tags = blog.tags
    ? blog.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];
  let coverImage = blog.coverImage?.url ?? "/cover/default.png";
  if (!blog.coverImage?.url && blog.url) {
    const og = await fetchOgImage(blog.url);
    if (og) coverImage = og;
  }
  const post: Post = {
    slug: blog.id,
    title: blog.title,
    date: (blog.publishedAt ?? blog.updatedAt ?? blog.createdAt).split("T")[0],
    tags,
    excerpt: blog.excerpt ?? buildExcerpt(blog.body),
    coverImage,
    content: blog.body,
  };
  if (blog.url) post.url = blog.url;
  return post;
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: { limit: 100, orders: "-publishedAt" },
  });
  return Promise.all(data.contents.map(toPost));
}

export async function getPagedPosts(page: number): Promise<{ posts: Post[]; totalCount: number }> {
  const data = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: {
      limit: POSTS_PER_PAGE,
      offset: (page - 1) * POSTS_PER_PAGE,
      orders: "-publishedAt",
    },
  });
  return { posts: await Promise.all(data.contents.map(toPost)), totalCount: data.totalCount };
}

export async function getPostsByTag(tag: string, page = 1): Promise<{ posts: Post[]; totalCount: number }> {
  const data = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: {
      limit: POSTS_PER_PAGE,
      offset: (page - 1) * POSTS_PER_PAGE,
      filters: `tags[contains]${tag}`,
      orders: "-publishedAt",
    },
  });
  return { posts: await Promise.all(data.contents.map(toPost)), totalCount: data.totalCount };
}

export async function getPostBySlug(
  slug: string,
  draftKey?: string,
): Promise<Post & { htmlContent: string }> {
  const blog = await client.get<MicroCMSBlog>({
    endpoint: "blogs",
    contentId: slug,
    queries: draftKey ? { draftKey } : undefined,
  });
  const post = await toPost(blog);
  const htmlContent = await markdownToHtml(post.content || "", {
    embedOrigin: "https://embed.zenn.studio",
  });
  return { ...post, htmlContent };
}

export async function getAllSlugs(): Promise<string[]> {
  const data = await client.getList<MicroCMSBlog>({
    endpoint: "blogs",
    queries: { limit: 100, fields: "id" },
  });
  return data.contents.map((b) => b.id);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap((p) => p.tags).sort();
  return Array.from(new Set(tags));
}

export async function getTagsWithCount(): Promise<{ tag: string; count: number }[]> {
  const posts = await getAllPosts();
  const countMap = new Map<string, number>();
  posts.forEach((p) =>
    p.tags.forEach((t) => countMap.set(t, (countMap.get(t) ?? 0) + 1))
  );
  return Array.from(countMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export { POSTS_PER_PAGE };
