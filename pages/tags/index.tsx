import Layout from "../../components/layout";
import Container from "../../components/container";
import TagStyle from "../../components/tag-style";
import { getTagsWithCount } from "../../lib/microcms";

type Props = {
  tagsWithCount: { tag: string; count: number }[];
};

export default function TagsIndex({ tagsWithCount }: Props) {
  return (
    <Layout title="カテゴリ一覧">
      <Container>
        <div className="pt-12 pb-6 border-b border-border-strong">
          <h1 className="text-4xl font-black text-fg tracking-tighter">Categories</h1>
          <p className="mt-2 text-sm text-fg-muted">カテゴリ別に記事を探せます</p>
        </div>
        <div className="py-10">
          <div className="flex flex-wrap gap-3">
            {tagsWithCount.map(({ tag, count }) => (
              <div key={tag} className="flex items-center gap-1.5">
                <TagStyle tag={tag} />
                <span className="text-xs text-fg-subtle">({count})</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const tagsWithCount = await getTagsWithCount();
  return {
    props: { tagsWithCount },
    revalidate: 60,
  };
}
