import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router"; // 追加
import Link from "next/link";
type Props = {
  totalCount: number;
  currentPage: number;
  tag: string;
};

const Pagination = ({ totalCount, currentPage, tag }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState(currentPage);
  const maxPages = Math.ceil(totalCount / 6);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    }) as any;

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);

    if (tag === "") {
      router.push(`/page/${active + 1}`);
    }
    if (tag !== "") {
      router.push(`/tags/${tag}/${active + 1}`);
    }
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    if (tag === "") {
      router.push(`/page/${active - 1}`);
    }
    if (tag !== "") {
      router.push(`/tags/${tag}/${active - 1}`);
    }
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {tag === ""
          ? Array.from({ length: maxPages }).map((_, index) => (
            <Link key={index} href="/page/[page]" as={`/page/${index + 1}`}>
              <IconButton {...getItemProps(index + 1)}>
                {index + 1}
              </IconButton>
            </Link>
          ))
          : Array.from({ length: maxPages }).map((_, index) => (
            <Link
              key={index}
              href="/tags/[tag]/[page]"
              as={`/tags/${tag}/${index + 1}`}
            >
              <IconButton {...getItemProps(index + 1)}>
                {index + 1}
              </IconButton>
            </Link>
          ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === maxPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
