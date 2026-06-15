import Layout from "../../../components/layout";
import Container from "../../../components/container";
import MoreStories from "../../../components/more-stories";
import TagStyle from "../../../components/tag-style";
import Pagination from "../../../components/pagination";
import { getPostsByTag, getAllTags, POSTS_PER_PAGE } from "../../../lib/microcms";

type Props = {
  posts: Awaited<ReturnType<typeof getPostsByTag>>["posts"];
  tag: string;
  totalCount: number;
  currentPage: number;
};

export default function TagPage({ posts, tag, totalCount, currentPage }: Props) {
  return (
    <Layout>
      <Container>
        <div className="pt-12 pb-6 border-b border-border-strong">
          <div className="flex items-center gap-3 flex-wrap">
            <TagStyle tag={tag} />
            <h1 className="text-xl font-bold text-fg tracking-tight">
              の記事 <span className="text-fg-muted font-normal text-base">({totalCount}件)</span>
            </h1>
          </div>
        </div>
        <MoreStories posts={posts} />
        <Pagination totalCount={totalCount} currentPage={currentPage} tag={tag} />
      </Container>
    </Layout>
  );
}

type Params = { params: { tag: string; index: string } };

export async function getStaticProps({ params }: Params) {
  const currentPage = parseInt(params.index, 10);
  const { posts, totalCount } = await getPostsByTag(params.tag, currentPage);
  return {
    props: { posts, tag: params.tag, totalCount, currentPage },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths: { params: { tag: string; index: string } }[] = [];
  for (const tag of tags) {
    const { totalCount } = await getPostsByTag(tag, 1);
    const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
    for (let i = 1; i <= totalPages; i++) {
      paths.push({ params: { tag, index: i.toString() } });
    }
  }
  return { paths, fallback: "blocking" };
}
