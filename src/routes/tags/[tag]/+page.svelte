<script lang="ts">
	import Meta from '@components/Meta.svelte';
	import PostList from '@components/PostList.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Meta title={`#${data.tag}`} />
<div class="flex justify-between">
	<h2 class="mb-6 text-2xl">posts / <span class="text-secondary-700">#{data.tag}</span></h2>
	<a href="/posts/">clear filter</a>
</div>
<div class="flex flex-col space-y-4">
	<PostList posts={data.posts} />
</div>
