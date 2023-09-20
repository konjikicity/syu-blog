import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import markdownToHtml from "zenn-markdown-html";
import type PostType from "../../interfaces/post";

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

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <div className="bg-[#27374D] rounded-lg p-4 my-4 sm:my-6 sm:p-12">
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
        <div className="flex justify-end">
          <TwitterShareButton
            url="https://syu-blog.vercel.app/"
            title={post.title}
            className="mr-4"
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <FacebookShareButton
            url="https://syu-blog.vercel.app/"
            quote={post.title}
            className="mr-4"
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          <LineShareButton
            url="https://syu-blog.vercel.app/"
            title={post.title}
            className="mr-4"
          >
            <LineIcon size={40} round={true} />
          </LineShareButton>

          <HatenaShareButton
            url="https://syu-blog.vercel.app/"
            title={post.title}
          >
            <HatenaIcon size={40} round={true} />
          </HatenaShareButton>
        </div>
      </Container>
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
