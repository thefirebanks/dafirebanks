<script lang="ts">
    export let title: string;
</script>

<div class="bg-secondary-50 relative px-4 pt-6 pb-4 mt-10 mb-2 text-xl">
	<p class="absolute left-4 top-[-20px] rounded-sm bg-primary-800 px-2 py-1 text-white">
		{title}
	</p>
    <slot />
</div>