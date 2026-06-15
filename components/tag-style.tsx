import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import noteIcon from "../public/icon/note-icon-white.png";
import qiitaIcon from "../public/icon/qiita-icon.png";

type TagProps = {
  tag: string;
  noLink?: boolean;
  className?: string;
};

const BASE_CHIP =
  "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border transition-colors";

const LINK_CHIP = `${BASE_CHIP} bg-fg text-fg-inverse border-fg-muted hover:bg-brand-hover hover:border-brand-hover`;
const SPAN_CHIP = `${BASE_CHIP} bg-fg text-fg-inverse border-fg-muted`;

const TagStyle: React.FC<TagProps> = ({ tag, noLink, className }) => {
  const [tagElement, setTagElement] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    setTagElement(checkTagImgUrl(tag));
  }, [tag]);

  if (noLink) {
    return (
      <span className={`${SPAN_CHIP} ${className ?? ""}`}>
        {tagElement}
        {tag}
      </span>
    );
  }

  return (
    <Link href={`/tags/${tag}`} className={`${LINK_CHIP} ${className ?? ""}`}>
      {tagElement}
      {tag}
    </Link>
  );
};

const checkTagImgUrl = (tag: string): React.ReactNode => {
  const tagElements: Record<string, React.ReactNode> = {
    laravel: <i className="devicon-laravel-plain colored" aria-hidden="true" />,
    ruby: <i className="devicon-ruby-plain colored" aria-hidden="true" />,
    php: <i className="devicon-php-plain colored" aria-hidden="true" />,
    vue: <i className="devicon-vuejs-plain colored" aria-hidden="true" />,
    react: <i className="devicon-react-original colored" aria-hidden="true" />,
    "next.js": <i className="devicon-nextjs-original" aria-hidden="true" />,
    docker: <i className="devicon-docker-plain colored" aria-hidden="true" />,
    rails: <i className="devicon-rails-plain-wordmark colored" aria-hidden="true" />,
    aws: <i className="devicon-amazonwebservices-plain-wordmark colored" aria-hidden="true" />,
    git: <i className="devicon-git-plain colored" aria-hidden="true" />,
    devTool: <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" />,
    日記: <i className="fa-solid fa-book" aria-hidden="true" />,
    note記事: (
      <Image src={noteIcon} alt="note" width={14} height={14} className="rounded-full" />
    ),
    Qiita記事: (
      <Image src={qiitaIcon} alt="Qiita" width={14} height={14} className="rounded-full" />
    ),
  };

  return tagElements[tag] ?? null;
};

export default TagStyle;
