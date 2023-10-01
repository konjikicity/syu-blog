import { getAllTags, getPostsByTag } from "../../../lib/api";
import Post from "../../../interfaces/post";
import Layout from "../../../components/layout";
import Container from "../../../components/container";
import MoreStories from "../../../components/more-stories";
import TagStyle from "../../../components/tag-style";
import Pagination from "../../../components/pagination";

type Props = {
  posts: Post[];
  tag: string;
  totalCount: number;
  currentPage: number;
};

export default function Index({ posts, tag, totalCount }: Props) {
  return (
    <>
      <Layout>
        <Container>
          <div className="mt-12 w-full sm:w-1/2 flex items-center justify-start">
            <TagStyle tag={tag} />
            <p className="pl-2 font-bold text-lg">を含む記事一覧</p>
          </div>
          <MoreStories posts={posts} currentPage={1} />
          <Pagination totalCount={totalCount} currentPage={1} tag={tag} />
        </Container>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    tag: string;
  };
};

export const getStaticProps = ({ params }: Params) => {
  const posts = getPostsByTag(params.tag, ["title", "date", "slug", "tags"]);

  return {
    props: {
      posts: posts,
      tag: params.tag,
      totalCount: posts.length,
    },
  };
};

export function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
}
