import DateFormatter from "./date-formatter";
import TagStyle from "./tag-style";

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, tags, date }: Props) => {
  return (
    <div className="mb-8 pb-6 border-b border-border-strong">
      <h1 className="text-2xl sm:text-3xl font-black text-fg leading-tight tracking-tight mb-4">
        {title}
      </h1>
      <div className="flex items-center flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <TagStyle key={tag} tag={tag} />
        ))}
      </div>
      <DateFormatter dateString={date} />
    </div>
  );
};

export default PostHeader;
