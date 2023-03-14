import { getFilteredPosts } from '../../utils';
import type { PostItem } from '../../types/global';

/** @type {import('./$types').PageLoad} */
export async function load(params) {
	const posts: Array<PostItem> = await getFilteredPosts({ params });

	return {
		status: 200,
		headers: {},
		posts
	};
}
