import Link from "next/link";
import Image from "next/image";
import DateFormatter from "./date-formatter";
import TagStyle from "./tag-style";

type PostProps = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  url?: string;
  coverImage?: string;
  excerpt?: string;
};

const PostPreview: React.FC<PostProps> = ({
  title,
  date,
  slug,
  tags,
  url,
  coverImage,
  excerpt,
}) => {
  const href = url ?? `/posts/${slug}`;
  const isExternal = !!url;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block border border-border-strong bg-white transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/9] w-full bg-bg-muted overflow-hidden">
        <Image
          src={coverImage ?? "/cover/default.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 bg-white">
        <h2 className="text-sm font-bold text-fg leading-snug line-clamp-2 tracking-tight">
          {title}
        </h2>
        {excerpt && (
          <p className="text-xs text-fg-muted leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag}>
                <TagStyle tag={tag} noLink />
              </li>
            ))}
          </ul>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
