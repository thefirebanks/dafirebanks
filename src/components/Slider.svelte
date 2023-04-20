<script lang="ts">
	import ArrowLeft from 'svelte-icons/ti/TiArrowLeftOutline.svelte';
	import ArrowRight from 'svelte-icons/ti/TiArrowRightOutline.svelte';

	export let items: any[] = [];
	export let currentItem = null;

	let currentItemIndex = 0;
	$: currentItem = items[((currentItemIndex % items.length) + items.length) % items.length];

	function previousSlide() {
		currentItemIndex--;
	}
	function nextSlide() {
		currentItemIndex++;
	}
</script>

{#if currentItem}
	<div class="flex flex-col items-center justify-center">
		<slot />
		<div class="w-full flex justify-evenly">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={previousSlide}>
				<slot name="prev">
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<ArrowLeft /> 
					</div>
				</slot>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={nextSlide}>
				<slot name="next">
					<div
						class="max-w-[4em] active:text-primary-500 transform-gpu duration-150 cursor-pointer text-secondary-700 hover:text-secondary-400"
					>
						<ArrowRight />
					</div>
				</slot>
			</div>
		</div>
	</div>
{/if}
