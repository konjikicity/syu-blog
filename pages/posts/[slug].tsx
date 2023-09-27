import { useRouter } from "next/router";
import { useEffect } from "react";
import ErrorPage from "next/error";
import PostContainer from "../../components/post-container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import markdownToHtml from "zenn-markdown-html";
import type PostType from "../../interfaces/post";
import tocbot from "tocbot";

import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from "react-share";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

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
    <Layout title={post.title}>
      <PostContainer>
        <div className="relative xl:grid xl:grid-cols-10 xl:gap-3">
          <div className="bg-[#27374D] xl:col-span-8 rounded-lg p-4 my-4 sm:my-6 sm:p-12">
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <PostHeader
                    title={post.title}
                    date={post.date}
                    tags={post.tags}
                  />
                  <PostBody content={post.content} />
                </article>
              </>
            )}
          </div>
          <div className="sticky pt-6 px-4 text-[0.8rem] top-[7.7rem] bg-[#27374D] text-white rounded-lg col-span-2 h-fit hidden xl:block">
            目次
            <nav className="mt-4 toc" />
          </div>

          <div className="flex justify-center sm:justify-start">
            <TwitterShareButton
              url={`${baseUrl}/posts/${encodeURIComponent(post.title)}`}
              title={post.title}
              className="mr-4"
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <FacebookShareButton
              url={`${baseUrl}/posts/${encodeURIComponent(post.title)}`}
              quote={post.title}
              className="mr-4"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <LineShareButton
              url={`${baseUrl}/posts/${encodeURIComponent(post.title)}`}
              title={post.title}
              className="mr-4"
            >
              <LineIcon size={40} round={true} />
            </LineShareButton>

            <HatenaShareButton
              url={`${baseUrl}/posts/${encodeURIComponent(post.title)}`}
              title={post.title}
            >
              <HatenaIcon size={40} round={true} />
            </HatenaShareButton>
          </div>
        </div>
      </PostContainer>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
