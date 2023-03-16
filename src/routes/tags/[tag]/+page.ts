import { getFilteredPosts } from '@utils';
import type { PostItem } from '@types';

/** @type {import('./$types').PageLoad} */
export async function load(params) {
	const tag: string = params.params.tag;

	const posts: Array<PostItem> = await getFilteredPosts({
		params,
		additiveFilter: true,
		filterFunction: (p) => {
			return p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase());
		}
	});
	return {
		status: 200,
		headers: {},
		posts,
		tag
	};
}
