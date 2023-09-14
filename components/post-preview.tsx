import DateFormatter from "./date-formatter";
import Link from "next/link";
import { Card, CardBody, CardFooter, Typography } from "../components/style";

type Props = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
};

const PostPreview = ({ title, date, slug, tags }: Props) => {
  return (
    <Card className="text-[#DDE6ED] bg-[#27374D] h-52 justify-between p-4">
      <CardBody className="mb-auto">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Typography className="text-xl font-bold hover:transform hover:scale-110 hover:duration-1000">
            {title}
          </Typography>
        </Link>
      </CardBody>
      <div className="flex justify-between mt-auto p-6">
        <ul className="flex gap-x-2 items-end mb-2">
          {tags.map((tag) => (
            <li className="font-bold">
              <a href={`/tags/${tag}`}>{tag}</a>
            </li>
          ))}
        </ul>
        <DateFormatter dateString={date} />
      </div>
    </Card>
  );
};

export default PostPreview;
