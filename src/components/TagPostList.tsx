import React from "react";
import { PostContent } from "../../types/types";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import tw, { css } from "twin.macro";

type OwnPropsT = {
  posts: PostContent[];
  tag: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function TagPostList({ posts, tag, pagination }: OwnPropsT) {
  return (
    <div css={[tw`flex flex-col`]}>
      <h1 css={[tw`py-4 text-2xl`]}>
        all posts / <span css={[tw`text-secondary-600`]}># {tag}</span>
      </h1>
      <ul>
        {posts.map((it, i) => (
          <li css={[tw`w-[300px] sm:w-[500px] md:w-[600px]`]} key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: () => "/posts/tags/[[...slug]]",
          as: (page) =>
            page === 1
              ? "/posts/tags/" + tag
              : `/posts/tags/${tag}/${page}`,
        }}
      />
    </div>
  );
}
