import { getFilteredPosts } from '../utils';
import type { PostItem } from '../types/global';

/** @type {import('./$types').PageLoad} */
export async function load(params) {
	const posts: Array<PostItem> = await getFilteredPosts({ params });
    posts.sort((p1, p2) => p1.date > p2.date);
    const latestPost = posts[0];

	return {
		status: 200,
		headers: {},
		latestPost
	};
}
