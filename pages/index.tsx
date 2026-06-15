import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import TagFilter from "../components/tag-filter";
import { getPagedPosts, getAllTags, POSTS_PER_PAGE } from "../lib/microcms";

type Props = {
  posts: Awaited<ReturnType<typeof getPagedPosts>>["posts"];
  totalCount: number;
  tags: string[];
};

export default function Index({ posts, totalCount, tags }: Props) {
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
        <Pagination totalCount={totalCount} currentPage={1} tag={""} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const [{ posts, totalCount }, tags] = await Promise.all([
    getPagedPosts(1),
    getAllTags(),
  ]);
  return {
    props: { posts, totalCount, tags },
    revalidate: 60,
  };
}
