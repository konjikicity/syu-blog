import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import TagStyle from "./tag-style";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, tags }: Props) => {
  return (
    <div className="text-center">
      <p className="text-4xl text-white font-bold">{title}</p>
      <ul className="flex items-center gap-x-2 sm:px-20">
        {tags.map((tag) => (
          <li className="font-bold py-6">
            <TagStyle tag={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostHeader;
