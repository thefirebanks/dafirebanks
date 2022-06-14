import React from "react";
import { PostContent } from "@types";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import tw from "twin.macro";

type Props = {
  posts: PostContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts, pagination }: Props) {
  return (
    <div css={[tw`flex flex-col`]}>
      <h1 css={[tw`py-4 text-2xl`]}>
        all posts
      </h1>
      <ul css={[tw`space-y-4 list-none`]}>
        {posts.map((it, i) => (
          <li css={[
            tw`w-[300px] sm:w-[500px] md:w-[600px]`  
          ]} key={i}>
            <PostItem post={it} />
          </li>
        ))}
      </ul>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
          as: (page) => (page === 1 ? null : "/posts/page/" + page),
        }}
      />
    </div>
  );
}
