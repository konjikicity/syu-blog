import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import TagStyle from "./tag-style";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, tags, date }: Props) => {
  return (
    <div className="text-center text-white">
      <p className="text-2xl sm:text-4xl font-bold">{title}</p>
      <ul className="flex items-center justify-center gap-x-2 sm:px-20">
        {tags.map((tag) => (
          <li className="font-bold py-6">
            <TagStyle tag={tag} />
          </li>
        ))}
      </ul>
      <DateFormatter dateString={date} />
    </div>
  );
};

export default PostHeader;
