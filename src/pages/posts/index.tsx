import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import TwitterCardMeta from "@components/meta/TwitterCardMeta";
import PostList from "@components/PostList";
import config from "@lib/config";
import { getPostCount, getPosts } from "@lib/content";
import { PostContent } from "@types";

type Props = {
  posts: PostContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, pagination }: Props) {
  const url = "/posts";
  const title = "all posts";
  return (
    <Layout.Default>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} pagination={pagination} />
    </Layout.Default>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts(1, config.posts_per_page);
 
  const pagination = {
    current: 1,
    pages: Math.ceil(getPostCount() / config.posts_per_page),
  };
  
  return {
    props: {
      posts,
      pagination,
    },
  };
};
