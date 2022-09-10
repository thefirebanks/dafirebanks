<script>
	import { SiteData } from '../site.ts';
</script>

<div class="flex flex-col items-center justify-center pb-12">
  <img
    alt="logo with the words Aryan Mann"
    src="/images/am_logo_black.png"
    width={170}
    height={72}
  />
  <div class="grid grid-cols-2 md:grid-cols-4 pt-12 gap-4">
    {#each SiteData.menuLinks as menuLink}
      <a class="thick-link" href={menuLink.url}>{menuLink.label}</a>
    {/each}
  </div>
</div>