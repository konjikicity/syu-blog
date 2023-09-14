import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, date, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto text-">
        <ul className="flex gap-x-2">
          {tags.map((tag) => (
            <li className="font-bold mb-12">
              <a href={`/tags/${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>

        <div className="mb-6 text-lg text-[#DDE6ED]">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
