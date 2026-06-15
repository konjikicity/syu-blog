import Layout from "../../../components/layout";
import Container from "../../../components/container";
import MoreStories from "../../../components/more-stories";
import TagStyle from "../../../components/tag-style";
import Pagination from "../../../components/pagination";
import { getPostsByTag, getAllTags } from "../../../lib/microcms";

type Props = {
  posts: Awaited<ReturnType<typeof getPostsByTag>>["posts"];
  tag: string;
  totalCount: number;
};

export default function TagIndex({ posts, tag, totalCount }: Props) {
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
        <Pagination totalCount={totalCount} currentPage={1} tag={tag} />
      </Container>
    </Layout>
  );
}

type Params = { params: { tag: string } };

export async function getStaticProps({ params }: Params) {
  const { posts, totalCount } = await getPostsByTag(params.tag, 1);
  return {
    props: { posts, tag: params.tag, totalCount },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: "blocking",
  };
}
