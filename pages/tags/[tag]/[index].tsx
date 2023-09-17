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

const POSTS_PER_PAGE = 6;

export default function Index({ posts, tag, totalCount, currentPage }: Props) {
  return (
    <>
      <Layout>
        <Container>
          <div className="mt-12 w-1/2 flex items-center justify-start">
            <TagStyle tag={tag} />
            <p className="pl-2 font-bold text-lg">を含む記事一覧</p>
          </div>
          <MoreStories posts={posts} currentPage={1} />
          <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
            tag={tag}
          />
        </Container>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    tag: string;
    index: string;
  };
};

export const getStaticProps = async (context: Params) => {
  const tag = context.params.tag;
  const currentPage = parseInt(context.params.index, 10);

  const allPosts = getPostsByTag(tag, ["title", "date", "slug", "tags"]);

  const paginatedPosts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return {
    props: {
      posts: paginatedPosts,
      tag,
      totalCount: allPosts.length,
      currentPage,
    },
  };
};

export function getStaticPaths() {
  const tags = getAllTags();
  const paths = [];

  tags.forEach((tag) => {
    const allPostsForTag = getPostsByTag(tag, [
      "title",
      "date",
      "slug",
      "tags",
    ]);
    const totalPages = Math.ceil(allPostsForTag.length / POSTS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
      paths.push({
        params: { tag, index: i.toString() },
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}
