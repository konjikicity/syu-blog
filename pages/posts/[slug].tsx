import { useEffect } from "react";
import PostContainer from "../../components/post-container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllSlugs } from "../../lib/microcms";
import tocbot from "tocbot";

import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

type Props = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    coverImage: string;
    htmlContent: string;
  };
};

export default function Post({ post }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".body",
      headingSelector: "h2, h3",
      headingsOffset: 100,
      scrollSmoothOffset: -100,
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <Layout title={post.title} slug={post.slug} isPost coverImage={post.coverImage}>
      <PostContainer>
        <div className="relative xl:grid xl:grid-cols-10 xl:gap-6 py-8">
          <div className="bg-white border border-border-strong xl:col-span-8 p-6 sm:p-10">
            <article>
              <PostHeader title={post.title} date={post.date} tags={post.tags} />
              <PostBody content={post.htmlContent} />
            </article>
          </div>

          <div className="sticky pt-6 px-4 text-sm top-[4.5rem] bg-white border border-border-strong text-fg-muted col-span-2 h-fit hidden xl:block">
            <p className="font-semibold text-fg text-xs tracking-widest uppercase mb-2">目次</p>
            <nav className="mt-2 toc" />
          </div>

          <div className="xl:col-span-8 flex justify-center sm:justify-start gap-3 mt-6">
            <TwitterShareButton url={`${baseUrl}/posts/${post.slug}`} title={post.title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton url={`${baseUrl}/posts/${post.slug}`} quote={post.title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LineShareButton url={`${baseUrl}/posts/${post.slug}`} title={post.title}>
              <LineIcon size={32} round />
            </LineShareButton>
            <HatenaShareButton url={`${baseUrl}/posts/${post.slug}`} title={post.title}>
              <HatenaIcon size={32} round />
            </HatenaShareButton>
          </div>
        </div>
      </PostContainer>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview,
  previewData,
}: {
  params: { slug: string };
  preview?: boolean;
  previewData?: { draftKey?: string };
}) {
  const draftKey = preview ? previewData?.draftKey : undefined;
  const post = await getPostBySlug(params.slug, draftKey);
  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        date: post.date,
        tags: post.tags,
        coverImage: post.coverImage,
        htmlContent: post.htmlContent,
      },
    },
    ...(preview ? {} : { revalidate: 60 }),
  };
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
