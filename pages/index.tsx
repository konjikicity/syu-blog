import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import Pagination from "../components/pagination";

type Props = {
  allPosts: Post[];
  totalCount: number;
};

export default function Index({ allPosts, totalCount }: Props) {
  return (
    <>
      <Layout>
        <Container>
          {allPosts.length > 0 && (
            <MoreStories posts={allPosts} currentPage={1} />
          )}
          <Pagination totalCount={totalCount} currentPage={1} tag={""} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "tags", "url"]);

  return {
    props: { allPosts, totalCount: allPosts.length },
  };
};
