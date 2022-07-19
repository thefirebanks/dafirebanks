<script>
  import { convertToDate } from "../../utils"
  export let title;
  export let date;
  export let tags;
</script>

<div class="flex flex-col mb-8">
  <div class="flex items-center justify-between mt-8 mb-8">
    <h1 class="text-4xl">{title}</h1>
    <p class="whitespace-nowrap px-2 text-right">{convertToDate(date)}</p>
  </div>
  {#if tags}
    <div class="space-x-2">
      {#each tags as tag}
      <a class="bg-secondary-100 hover:bg-secondary-300 px-2 py-1 m-1 no-underline rounded shadow" href={`/tags/${tag}`}>{tag}</a> 
      {/each}
    </div>
  {/if}
</div>
<div class="typo flex flex-col">
  <slot />
</div>