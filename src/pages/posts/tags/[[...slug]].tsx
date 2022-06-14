import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@components/Layout";
import BasicMeta from "@components/meta/BasicMeta";
import OpenGraphMeta from "@meta/OpenGraphMeta";
import TwitterCardMeta from "@meta/TwitterCardMeta";
import TagPostList from "@components/TagPostList";
import config from "@lib/config";
import { getAllTags, getPostCount, getPosts } from "@lib/content";
import { PostContent } from "@types";

type Props = {
  posts: PostContent[];
  tag: string;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ posts, tag, pagination, page }: Props) {
  const url = `/posts/tags/${tag}` + (page ? `/${page}` : "");
  const title = tag;

  return (
    <Layout.Default>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
    </Layout.Default>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  
  const [slug, page] = [queries[0], queries[1]];
  const posts = getPosts(
    page ? parseInt(page as string) : 1,
    config.posts_per_page,
    slug
  );

  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(getPostCount(slug) / config.posts_per_page),
  };
  const props: {
    posts: PostContent[];
    tag: string;
    pagination: { current: number; pages: number };
    page?: string;
  } = { posts, 
    tag: slug, 
    pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTags().flatMap((tag) => {
    const pages = Math.ceil(getPostCount(tag) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag] },
          }
        : {
            params: { slug: [tag, (page + 1).toString()] },
          }
    );
  });

  return {
    paths: paths,
    fallback: false,
  };
};
