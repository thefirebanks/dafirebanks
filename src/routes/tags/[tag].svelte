<script lang="ts">
  import { convertToDate } from "../../utils";
  import type { PostItem } from "../../types/global"

  export let posts: Array<PostItem> = [];
  export let tag;
</script>

<div class="flex justify-between">
  <h2 class="mb-6 text-2xl">posts / <span class="text-secondary-700">#{tag}</span></h2>
  <a href="/posts/">clear filter</a>
</div>
<div class="flex flex-col space-y-4">
  {#if posts.length == 0}
    <p class="mt-24 text-2xl text-center">no posts found!</p>
  {/if}
  {#each posts as post}
    <a class="group hover:bg-primary-100 hover:not-italic justify-between px-8 py-4 no-underline" href={post.url}>
      <div class="flex justify-between">
        <p class="group-hover:italic text-xl">
          <span class="group-hover:inline-block hidden">☞</span>
          {post.title}
        </p>
        <p class="">{convertToDate(post.date)}</p>
      </div>
      <div class="max-w-24 max-h-28 flex mt-2 space-x-3">
        {#each post.tags as tag}
          <a class="text-sm" href={`/tags/${tag}`}>#{tag}</a>
        {/each} 
      </div>
    </a>
  {/each}
</div>