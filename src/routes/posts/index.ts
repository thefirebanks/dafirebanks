import type { PostItem } from "../../types/global";

/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
  const mdxModules = import.meta.glob('./*.mdx')
  let postList: Array<PostItem> = [];

  for (let moduleKey in mdxModules) {
    const urlPath = `/posts/${moduleKey.substring(2, moduleKey.length-4)}`
    const modulePromise = mdxModules[moduleKey];
    const resolvedModule: any = await modulePromise();
    const mt = resolvedModule.metadata;

    postList.push({
      url: urlPath,
      title: mt.title,
      date: new Date(mt.date),
      tags: mt.tags || []
    })
  }

  postList.sort((p1, p2) => <number>(p2.date - p1.date))

  return {
    status: 200,
    headers: {},
    body: {
      posts: postList
    }
  };
}