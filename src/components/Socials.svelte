<script>
  import { SiteData } from "../site";
</script>

<div class="flex items-center justify-end">
  <div class="flex px-4 py-2 space-x-4 shadow-md bg-primary-200">
    {#each SiteData.socials as social}
      <a 
        title={social.title}
        target="_blank"
        rel="noreferrer"
        href={social.url}
      >
      {social.title}
      </a>
    {/each}
  </div>
</div>
