import TagStyle from "./tag-style";

type Props = {
  tags: string[];
  activeTag?: string;
};

const TagFilter = ({ tags, activeTag }: Props) => {
  if (tags.length === 0) return null;

  return (
    <div className="pt-6 pb-2">
      <p className="text-xs text-fg-subtle tracking-widest uppercase mb-3">カテゴリ</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagStyle
            key={tag}
            tag={tag}
            className={activeTag === tag ? "opacity-50 cursor-default pointer-events-none" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
