<script lang="ts">
  import { convertToDate } from "../../utils";
  import type { PostItem } from "../../types/global"
  import Meta from "../../components/Meta.svelte";

  export let posts: Array<PostItem> = [];
</script>

<Meta title="Blog" />

<h2 class="mb-6 text-2xl">posts / all</h2>
<div class="flex flex-col space-y-4">
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