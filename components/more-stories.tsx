import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
  currentPage: number; // 現在のページ番号を追加
};

const MoreStories = ({ posts, currentPage }: Props) => {
  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex); // 現在のページの投稿を取得

  return (
    <section>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-32">
        {currentPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
