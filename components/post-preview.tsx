import DateFormatter from "./date-formatter";
import Link from "next/link";
import { Card, CardBody, CardFooter, Typography } from "../components/style";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <Card className="text-[#DDE6ED] bg-[#27374D] hover:opacity-50 h-52 justify-between p-4">
        <CardBody>
          <Typography className="text-xl font-bold">{title}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <DateFormatter dateString={date} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostPreview;
