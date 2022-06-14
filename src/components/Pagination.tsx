import { generatePagination } from "../lib/pagination";
import Link from "next/link";
import tw, { css } from "twin.macro";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <div css={tw`flex items-center justify-center`}>
      <ul css={tw`p-0 mt-12 list-none`}>
        {pagination.map((it, i) => (
          <li css={tw`inline-block mr-4 text-xl text-white`} key={i}>
            {it.excerpt ? (
              "..."
            ) : (
              <Link href={link.href(it.page)} as={link.as(it.page)}>
                <a css={[(it.page === current) && tw`font-bold text-secondary-400`]}>
                  {it.page}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
