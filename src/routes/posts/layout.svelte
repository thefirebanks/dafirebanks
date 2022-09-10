<script>
  import Meta from "../../components/Meta.svelte";
  import { convertToDate } from "../../utils"
  export let title;
  export let date;
  export let tags;
</script>

<Meta title={title} date={date} />

<div class="flex flex-col mb-8">
  <div class="flex flex-col md:flex-row md:items-center justify-between mt-8 mb-8">
    <h1 class="text-3xl md:text-4xl">{title}</h1>
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
<div class="mt-8 text-center text-gray-600">
  For any criticism, kudos, or thoughts, shoot me a messsage at <a href="mailto:aryan.21.mann@gmail.com">aryan.21.mann@gmail.com</a>
</div>
<div class="flex justify-center mt-8 space-x-4 text-gray-600">
  <a class="thick-link" href="/">home</a>
  <a class="thick-link" href="/posts">all posts</a>
</div>