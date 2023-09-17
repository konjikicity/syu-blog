import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import Pagination from "../../components/pagination";

type Props = {
  allPosts: Post[];
  totalCount: number;
  currentPage: number;
};

const POSTS_PER_PAGE = 6;

export default function IndexPage({
  allPosts,
  totalCount,
  currentPage,
}: Props) {
  return (
    <>
      <Layout>
        <Container>
          {allPosts.length > 0 && (
            <MoreStories posts={allPosts} currentPage={currentPage} />
          )}
          <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
            tag={""}
          />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context: any) => {
  const allPosts = getAllPosts(["title", "date", "slug", "tags"]);
  const currentPage = parseInt(context.params.index, 10);

  if (
    isNaN(currentPage) ||
    currentPage < 1 ||
    currentPage > Math.ceil(allPosts.length / POSTS_PER_PAGE)
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: { allPosts, totalCount: allPosts.length, currentPage },
  };
};

export function getStaticPaths() {
  const allPosts = getAllPosts(["title", "date", "slug", "tags"]);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }).map((_, index) => ({
    params: { index: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
