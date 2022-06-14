import Link from "next/link";
import tw, { css } from "twin.macro";

export default function TagButton({ tag }) {
  return (
    <>
      <Link
        passHref={true}
        href={"/posts/tags/[[...slug]]"}
        as={`/posts/tags/${tag}`}
      >
        <a
          css={[
            css`
              & {
                display: inline-block;
                border-radius: 3px;
                ${tw`text-black bg-secondary-100`};
                transition: background-color 0.3s ease;
                padding: 0.25em 0.5em;
                margin: 0em 0.4em;
              }
              &:active,
              &:hover {
                ${tw`text-white bg-secondary-700`}
              }
            `,
          ]}
        >
          {tag}
        </a>
      </Link>
    </>
  );
}
