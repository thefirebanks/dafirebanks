import { GetStaticPaths, GetStaticProps } from "next";
import { PostContent } from "@types";
import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@components/meta/OpenGraphMeta";
import TwitterCardMeta from "@components/meta/TwitterCardMeta";
import PostList from "@components/PostList";
import config from "@lib/config";
import { getAllTags, getPostCount, getPosts } from "@lib/content";

type Props = {
  posts: PostContent[];
  tags: string[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Page({ posts, tags, pagination, page }: Props) {
  const url = `/posts/page/${page}`;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const posts = getPosts(page, config.posts_per_page);
  const tags = getAllTags();
  
  const pagination = {
    current: page,
    pages: Math.ceil(getPostCount() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(getPostCount() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
