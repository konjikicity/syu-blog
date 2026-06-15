import PostPreview from "./post-preview";
import type { Post } from "../lib/microcms";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 my-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            tags={post.tags}
            url={post.url}
            coverImage={post.coverImage}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
