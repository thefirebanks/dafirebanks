<script lang="ts">
	import Socials from '../components/Socials.svelte';
	import Meta from '../components/Meta.svelte';
	import Slider from '../components/Slider.svelte';
	import { SiteData } from '../site';
	import Tagline from '@components/Tagline.svelte';
	// import MeImage from "@assets/images/me1.jpg";
	import type { PageData } from './$types';
	
	let portfolioItem = SiteData.portfolio[0];
	export let data: PageData;
</script>

<Meta title="Homepage" description="this website has stuff." />
<!-- Hero -->
<div class="flex flex-col items-center">
	<div class="sm:flex-row flex flex-col items-center py-4 space-x-8">
		<!-- <img alt="photo of daniel firebanks" class="max-h-32 rounded-full shadow-xl animate-cool" src={MeImage} /> -->
		<h1 class="text-4xl">hey there!</h1>
	</div>
	<h3 class="py-2 text-xl text-center"> I'm Daniel. This website is in construction but it will have stuff soon :)</h3>
</div>
<Tagline title="most recent..." hasDog={true}>
	this is a description
</Tagline>
<!-- Socials -->
<Socials />
<!-- Begin Work Portfolio -->
<h3 class="w-full py-4 mt-8 text-xl text-center">
	<p>actual work & personal projects</p>
</h3>
<!-- Work Portfolio Slider -->
<Slider items={SiteData.portfolio} bind:currentItem={portfolioItem}>
	{#if portfolioItem}
		<div class="flex flex-col w-full">
			<a
				class="text-xl no-underline font-bold hover:text-primary-700 text-center w-full animate-pulse"
				href={`https://${portfolioItem.website}`}
				target="_blank" rel="noreferrer"
				>{portfolioItem.displayName || portfolioItem.website}</a
			>
			<a href={`https://${portfolioItem.website}`}>
				<img class="shadow w-full aspect-video cursor-pointer transform-gpu hover:-rotate-1 hover:shadow-md duration-200" alt="" src={portfolioItem.image} />
			</a>
			{#if portfolioItem.description}
				<p class="mt-3">{portfolioItem.description}</p>
			{/if}
		</div>
	{/if}
</Slider>
<!-- Work Summary -->
<h3 class="w-full py-4 mt-8 text-xl text-center">
	quick summary
</h3>
<div class="flex justify-center">
	<ul class="max-w-screen-sm list-disc">
		<li>
			<b> Then, to present</b> – relentlessly pursuing a 🟩 in the 🇺🇸
		</li>
		<!-- <li>
			<b>September 2020 to July 2023 </b> NEW YORK 🇺🇸
		</li> -->
		<!-- <li>
			<b>January 2019 to May 2019</b> – Interlude: 🇭🇺
		</li> -->
		<!-- <li>
			<b>August 2016 to May 2020</b> – Went 180 to the flatlands of Oberlin, Ohio. 🇺🇸
		</li>
		<li>
			<b>August 2014 to May 2016</b> – Lived by a <a href=https://www.unitedworldwide.co/uploads/1/3/0/8/130843894/uwcusa-campus-view-2-e1552924297223_orig.jpg>castle</a> in the mountains of New Mexico 🇺🇸
		</li> -->
		<li>
			<b>1990s to August 2014</b> – ¯\_(ツ)_/¯ in 🇵🇪
		</li>
	</ul>
</div>

{#if data.recentPosts}
<!-- Latest Blog Post -->
<h3 class="py-4 mt-8 text-xl">thoughts</h3>
<div class="flex flex-col gap-4 flex-wrap px-8 text-xl">
	{#each data.recentPosts as recentPost}
	<div class='flex gap-4 items-center'>
			<span class="mr-2">✍🏽</span><a class="text-xl no-underline hover:bg-slate-50 px-2" href={recentPost.url}>{recentPost.title}</a>
			<p class='text-sm'>on {recentPost.date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
	</div>
	{/each}
</div>
{/if}

<!-- Fake Todo List -->
<h3 class="py-4 mt-4 text-xl">TODO</h3>
<ul class="inline-flex flex-col ml-8 list-disc">
	<li>add a post about something</li>
	<li>add more detailed project breakdowns</li>
</ul>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg) scale(0.9);
		}
		25% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(0deg) scale(1.2);
		}
		75% {
			transform: rotate(10deg);
		}
		to {
			transform: rotate(0deg) scale(0.9);
		}
	}
	.animate-cool {
		animation: spin 8s cubic-bezier(0.755, 0.05, 0.855, 0.06) infinite;
	}

</style>

<!-- Add some space between the previous elements and the footer -->
<div class="py-8"></div>
<footer class="text-center py-4 text-gray-500"> 
	<p class="text-sm">Website built with <a href="https://svelte.dev" target="_blank" rel="noreferrer">svelte</a> by the unmistakable <a href="https://aryanmann.com/" target="_blank" rel="noreferrer">Aryan Mann</a>.</p>
</footer>
