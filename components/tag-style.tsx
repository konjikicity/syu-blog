import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import noteIcon from "../public/icon/note-icon.png";
import qiitaIcon from "../public/icon/qiita-icon.png";

type TagProps = {
  tag: string;
};

const TagStyle: React.FC<TagProps> = ({ tag }) => {
  const [tagElement, setTagElement] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    setTagElement(checkTagImgUrl(tag));
  }, [tag]);

  return (
    <Link
      href={`/tags/${tag}`}
      className="px-2 py-1 rounded-lg bg-black font-bold text-white transition flex items-center justify-between hover:opacity-50"
    >
      {tagElement}
      {tag}
    </Link>
  );
};

const checkTagImgUrl = (tag: string): React.ReactNode => {
  const tagElements = {
    laravel: <i className="mr-2 devicon-laravel-plain colored"></i>,
    ruby: <i className="mr-2 devicon-ruby-plain colored"></i>,
    php: <i className="mr-2 devicon-php-plain colored"></i>,
    vue: <i className="mr-2 devicon-vuejs-plain colored"></i>,
    react: <i className="mr-2 devicon-react-original colored"></i>,
    "next.js": <i className="mr-2 devicon-nextjs-original"></i>,
    docker: <i className="mr-2 devicon-docker-plain colored"></i>,
    rails: <i className="mr-2 devicon-rails-plain-wordmark colored"></i>,
    aws: (
      <i className="mr-2 devicon-amazonwebservices-plain-wordmark colored"></i>
    ),
    git: <i className="mr-2 devicon-git-plain colored"></i>,
    devTool: <i className="mr-2 fa-solid fa-screwdriver-wrench"></i>,
    日記: <i className="mr-2 fa-solid fa-book"></i>,
    note記事: (
      <Image
        src={noteIcon}
        alt="note"
        width={20}
        height={20}
        className="mr-2 rounded-full bg-white"
      />
    ),
    Qiita記事: (
      <Image
        src={qiitaIcon}
        alt="note"
        width={20}
        height={20}
        className="mr-2 rounded-full bg-white"
      />
    ),
  };

  return tagElements[tag] || null;
};

export default TagStyle;
