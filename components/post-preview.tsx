import DateFormatter from "./date-formatter";
import Link from "next/link";
import { Card, CardBody, Typography } from "../components/style";
import TagStyle from "../components/tag-style";
import React, { useMemo } from "react";

type PostProps = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
};

const PostPreview: React.FC<PostProps> = ({ title, date, slug, tags }) => {
  const renderedTags = useMemo(() => {
    return tags.map((tag, index) => (
      <li key={index}>
        <TagStyle tag={tag} />
      </li>
    ));
  }, [tags]);

  return (
    <Card className="text-[#DDE6ED] bg-[#27374D] h-52">
      <CardBody className="w-full h-full flex flex-col justify-between">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Typography className="text-xl font-bold transition hover:transform hover:scale-110 hover:duration-1000">
            {title}
          </Typography>
        </Link>
        <div className="mt-auto sm:flex justify-between">
          <ul className="flex gap-x-2 items-end mb-2 sm:mb-0">
            {renderedTags}
          </ul>
          <DateFormatter dateString={date} />
        </div>
      </CardBody>
    </Card>
  );
};

export default PostPreview;
