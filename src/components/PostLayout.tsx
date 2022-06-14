import React from "react";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import tw, { css } from "twin.macro";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};

export default function ThePost({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}: Props) {
  return (
    <section css={[tw`w-full max-w-screen-sm`]}>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={tags}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={tags}
        date={date}
        author={author}
        description={description}
      />
      <article css={[tw`mb-4`]}>
        <header css={[tw`flex items-center justify-between`]}>
          <h1 css={[tw`pb-2 text-4xl md:pb-6`]}>{title}</h1>
          <div css={[tw`flex justify-between`]}>
            <div>
              {date.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </div>
          </div>
        </header>
        <div css={[tw`flex items-center justify-center mt-2`]}>
          <hr css={[tw`w-8/12 text-center`]} />
        </div>
        <div css={[tw`py-8 prose-xl`]}>{children}</div>
        <ul css={[tw`flex flex-row-reverse pt-8`]}>
          {tags.map((it, i) => (
            <li key={i}>
              <TagButton tag={it} />
            </li>
          ))}
        </ul>
      </article>
      <SocialList />
    </section>
  );
}
