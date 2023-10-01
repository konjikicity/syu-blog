import DateFormatter from "./date-formatter";
import { Card, CardBody, Typography } from "../components/style";
import TagStyle from "../components/tag-style";
import React, { useMemo } from "react";

type PostProps = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  url?: string;
};

const PostPreview: React.FC<PostProps> = ({ title, date, slug, tags, url }) => {
  const handleCardClick = () => {
    const anchor = document.createElement("a");
    if (url === null) {
      anchor.href = `/posts/${slug}`;
    } else {
      anchor.href = url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer"; // target="_blank"を使用する際のセキュリティ対策として追加
    }
    anchor.click();
  };

  const renderedTags = useMemo(() => {
    return tags.map((tag, index) => (
      <li key={index} onClick={(e) => e.stopPropagation()}>
        <TagStyle tag={tag} />
      </li>
    ));
  }, [tags]);

  return (
    <div onClick={handleCardClick} className="hover:cursor-pointer">
      <Card className="text-[#DDE6ED] bg-[#27374D] h-60 hover:scale-110 sm:h-52 card-previews transform transition-transform duration-300 hover:-translate-y-2">
        <CardBody className="w-full h-full flex flex-col justify-between">
          <Typography className="text-xl font-bold">{title}</Typography>
          <div className="mt-auto sm:flex justify-between">
            <ul className="flex gap-x-2 items-end mb-2 sm:mb-0">
              {renderedTags}
            </ul>
            <DateFormatter dateString={date} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostPreview;
