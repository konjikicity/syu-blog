import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createClient } from "microcms-js-sdk";

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("Set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY in .env.local");
  process.exit(1);
}

const client = createClient({ serviceDomain: SERVICE_DOMAIN, apiKey: API_KEY });

const POSTS_DIR = path.join(process.cwd(), "_posts");

function buildExcerpt(content: string, title: string): string {
  const cleaned = content
    .replace(/^#+\s+.+$/gm, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.+?)\]\(.*?\)/g, "$1")
    .replace(/[*_`>#~\-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
  return cleaned || title;
}

async function main() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIR, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const tags = Array.isArray(data.tags) ? data.tags.join(",") : data.tags ?? "";
    const publishedAt = new Date(data.date).toISOString();

    const payload: Record<string, unknown> = {
      title: data.title,
      tags,
      body: content,
      excerpt: data.excerpt ?? buildExcerpt(content, data.title),
      publishedAt,
    };
    if (data.url) payload.url = data.url;

    try {
      await client.create({
        endpoint: "blogs",
        contentId: slug,
        content: payload,
      });
      console.log(`✓ ${slug}`);
    } catch (err: any) {
      const message = err?.message ?? String(err);
      if (message.includes("already exists") || message.includes("既に存在")) {
        await client.update({
          endpoint: "blogs",
          contentId: slug,
          content: payload,
        });
        console.log(`↻ ${slug} (updated)`);
      } else {
        console.error(`✗ ${slug}: ${message}`);
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
