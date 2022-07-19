<script>
  import GiHamburgerMenu from 'svelte-icons/gi/GiHamburgerMenu.svelte'
  let isMenuOpen = false;
</script>

{#if isMenuOpen}
<div class="bg-secondary-800 md:hidden fixed top-0 left-0 flex items-center justify-center w-full h-full">
  <ul class="static p-0 m-0 space-y-4 list-none">
    <li>
      <img alt="logo with the words Aryan Mann" src={"/images/am_logo_black.png"} width={170} height={72} />
    </li>
    <li>
      <a href="/">
        about
      </a>
    </li>
    <li>
      <a href="/resume.pdf">
        resume
      </a>
    </li>
    <li>
      <a href="/posts">
        blog
      </a>
    </li>
  </ul>
</div>
{/if}
<div
  class="bg-primary-800 hover:bg-primary-500 top-6 right-10 md:hidden fixed flex items-center justify-center w-12 h-12 px-3 text-white transition-all duration-200 rounded-md cursor-pointer"
  class:open={isMenuOpen}
  on:click={() => { isMenuOpen = !isMenuOpen; }}
>
  <!-- onClick={() => setMenuHidden(!isMenuHidden)} -->
  <GiHamburgerMenu />
  <!-- <FaHamburger /> -->
</div>