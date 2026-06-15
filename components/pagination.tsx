import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  totalCount: number;
  currentPage: number;
  tag: string;
};

const Pagination = ({ totalCount, currentPage, tag }: Props) => {
  const maxPages = Math.ceil(totalCount / 6);

  const pageHref = (page: number) =>
    tag === "" ? `/page/${page}` : `/tags/${tag}/${page}`;

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          className="inline-flex items-center gap-1 px-3 py-2 border border-border-strong text-xs tracking-wide text-fg-muted hover:bg-fg hover:text-fg-inverse transition-colors"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Prev
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3 py-2 border border-border text-xs tracking-wide text-fg-subtle cursor-not-allowed opacity-40">
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Prev
        </span>
      )}

      <div className="flex items-center gap-1">
        {Array.from({ length: maxPages }).map((_, index) => {
          const page = index + 1;
          const isCurrent = currentPage === page;
          return isCurrent ? (
            <span
              key={page}
              aria-current="page"
              className="inline-flex items-center justify-center w-9 h-9 text-xs font-bold bg-fg text-fg-inverse border border-fg"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={pageHref(page)}
              className="inline-flex items-center justify-center w-9 h-9 text-xs border border-border text-fg-muted hover:border-border-strong hover:text-fg transition-colors"
            >
              {page}
            </Link>
          );
        })}
      </div>

      {currentPage < maxPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          className="inline-flex items-center gap-1 px-3 py-2 border border-border-strong text-xs tracking-wide text-fg-muted hover:bg-fg hover:text-fg-inverse transition-colors"
        >
          Next
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 px-3 py-2 border border-border text-xs tracking-wide text-fg-subtle cursor-not-allowed opacity-40">
          Next
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
};

export default Pagination;
