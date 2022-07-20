import type { PostItem } from "../../types/global";

/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
  const mdxModules = import.meta.glob('../posts/*.mdx')
  let postList: Array<PostItem> = [];
  const tag = params.tag;

  for (let moduleKey in mdxModules) {
    const urlPath = `${moduleKey.substring(2, moduleKey.length-4)}`
    const modulePromise = mdxModules[moduleKey];
    const resolvedModule: any = await modulePromise();
    const mt = resolvedModule.metadata;

    if (mt.tags.includes(tag)){
      postList.push({
        url: urlPath,
        title: mt.title,
        date: new Date(mt.date),
        tags: mt.tags || []
      })
    }
  }

  postList.sort((p1, p2) => <number>(p2.date - p1.date))

  return {
    status: 200,
    headers: {},
    body: {
      posts: postList,
      tag: tag
    }
  };
}