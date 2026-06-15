import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import TagFilter from "../../components/tag-filter";
import { getPagedPosts, getAllTags, POSTS_PER_PAGE } from "../../lib/microcms";

type Props = {
  posts: Awaited<ReturnType<typeof getPagedPosts>>["posts"];
  totalCount: number;
  currentPage: number;
  tags: string[];
};

export default function IndexPage({ posts, totalCount, currentPage, tags }: Props) {
  return (
    <Layout>
      <Container>
        <div className="pt-12 pb-6 border-b border-border-strong">
          <h1 className="text-4xl font-black text-fg tracking-tighter">SYU BLOG</h1>
          <p className="mt-2 text-sm text-fg-muted">
            Web 技術・日常・個人開発について書いています。
          </p>
        </div>
        <TagFilter tags={tags} />
        {posts.length > 0 && <MoreStories posts={posts} />}
        <Pagination totalCount={totalCount} currentPage={currentPage} tag={""} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const currentPage = parseInt(context.params.index, 10);
  const [{ posts, totalCount }, tags] = await Promise.all([
    getPagedPosts(currentPage),
    getAllTags(),
  ]);

  if (isNaN(currentPage) || currentPage < 1 || currentPage > Math.ceil(totalCount / POSTS_PER_PAGE)) {
    return { notFound: true };
  }

  return {
    props: { posts, totalCount, currentPage, tags },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { totalCount } = await getPagedPosts(1);
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }).map((_, i) => ({
    params: { index: (i + 1).toString() },
  }));
  return { paths, fallback: "blocking" };
}
