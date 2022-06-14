import { PostContent } from "@types";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import tw, { css } from "twin.macro";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <div css={[tw`px-3 py-3 hover:bg-gray-50`]}>
      <Link href={"/posts/" + post.slug} passHref={true}>
        <a>
          <div css={[tw`flex items-center justify-between`]}>
            <Date date={parseISO(post.date)} />
            {(post.tags?.length ?? 0) > 0 &&
              (() => {
                const tag = post.tags[0];
                return (
                  <Link
                    href={"/posts/tags/[[...slug]]"}
                    as={`/posts/tags/${tag}`}
                    passHref={true}
                  >
                    <p css={tw`text-secondary-800 hover:text-secondary-300`}>
                      #{tag}
                    </p>
                  </Link>
                );
              })()}
          </div>
          <h2 css={tw`text-xl`}>{post.title}</h2>
        </a>
      </Link>
    </div>
  );
}
