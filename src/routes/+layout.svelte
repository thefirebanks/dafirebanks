<script>
	import Meta from '../components/Meta.svelte';
	import '../app.postcss';
	import Layout from '../components/Layout.svelte';
	import BG_EFFECT from 'vanta/src/vanta.dots';
	import { afterUpdate, onMount } from 'svelte';

	let vantaRef = null;
	let backgroundActive = false;
	function addBackground() {
		BG_EFFECT({ 
			el: vantaRef,
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			color: 0xac5305,
			color2: 0xc80000,
			backgroundColor: 0xfefefe,
			size: 6.60,
			spacing: 76.00,
			showLines: false
		});
	}

	onMount(() => {
		addBackground();
		backgroundActive = true;
	})

	afterUpdate(() => {
		if (backgroundActive === false && vantaRef) {
			addBackground();
		}
	})
</script>

<Meta title />
<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
</svelte:head>
<Layout>
	<div class="absolute left-0 top-0 w-[100vw] h-[100vh] -z-20" bind:this={vantaRef} />
	<slot />
</Layout>
