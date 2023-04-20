<script lang="ts">
	import Socials from '../components/Socials.svelte';
	import Meta from '../components/Meta.svelte';
	import Slider from '../components/Slider.svelte';
	import { SiteData } from '../site';
	import Tagline from '@components/Tagline.svelte';

	let portfolioItem = SiteData.portfolio[0];
</script>

<Meta title="Homepage" description="this website has stuff about me and the work ive done." />
<!-- Hero -->
<div class="flex flex-col items-center">
	<div class="sm:flex-row flex flex-col items-center py-4 space-x-8">
		<img alt="face of aryan mann" class="max-h-32 rounded-full shadow-xl" src="/images/me1.jpg" />
		<h1 class="text-4xl">hey! i'm aryan.</h1>
	</div>
	<h3 class="py-2 text-xl text-center">this website has stuff about me and the work ive done.</h3>
</div>
<Tagline title="working on...">
	currently im working on the{' '}<b>glTF</b> team at{' '}
	<b>unity</b>, building tools and working with the
	<a href="https://github.com/KhronosGroup/glTF">glTF</a> file format that powers digital twins at scale.
</Tagline>
<!-- Socials -->
<Socials />
<!-- Begin Work Portfolio -->
<h3 class="w-full py-4 mt-8 text-xl text-center">
	<p>work portfolio</p>
</h3>
<!-- Work Portfolio Slider -->
<Slider items={SiteData.portfolio} bind:currentItem={portfolioItem}>
	{#if portfolioItem}
		<div class="flex flex-col w-full">
			<a
				class="text-xl no-underline font-bold hover:text-primary-700 text-center w-full animate-pulse"
				href={`https://${portfolioItem.website}`}
				target="_blank"
				>{portfolioItem.displayName || portfolioItem.website}</a
			>
			<img class="shadow w-full aspect-video" alt="" src={portfolioItem.image} />
			{#if portfolioItem.description}
				<p class="mt-3">{portfolioItem.description}</p>
			{/if}
		</div>
	{/if}
</Slider>
<!-- Work Summary -->
<h3 class="w-full py-4 mt-8 text-xl text-center">
	quick summary (<a href="https://github.com/aryan-mann">longer one here</a>)
</h3>
<div class="flex justify-center">
	<ul class="max-w-screen-sm list-disc">
		<li>
			<b> july 2021 to present </b>{' '}
			– working on enabling low-touch high-performance synthetic worlds that generate data for computer
			vision models.. i.e.{' '}
			<a href="https://github.com/Unity-Technologies/com.unity.perception">
				perception package
			</a>{' '}
			for Unity Technologies
		</li>
		<li>
			<b>june 2017 to may 2021</b> – studied computer science and philosopy at Grinnell College. favorite
			classes: philosophy of mind, automata theory, algorithms, metaphysics!
		</li>
		<li>
			<b>december 2018 to march 2020</b> – worked at the data analysis and social inquiry lab making
			information about alumni outcomes accessible to current students via an interactive React app
		</li>
		<li>
			<div class="flex flex-col">
				<b>april 2016 to june 2018</b> – worked on creating three beautiful websites via cutting
				edge web technologies such as React, NextJs, and SSG
				<ul class="inline-flex flex-col ml-8">
					<li>
						- <a href="https://amchemproducts.com">amchemproducts.com</a>
					</li>
					<li>
						- <a href="https://drythane.com">drythane.com</a>
					</li>
					<li>
						- <a href="https://amshield.com">amshield.com</a>
					</li>
				</ul>
			</div>
		</li>
		<li>
			<b>1990s to april 2016</b> – ¯\_(ツ)_/¯
		</li>
	</ul>
</div>
<!-- Fake Todo List -->
<h3 class="py-4 mt-8 text-xl">todo list</h3>
<ul class="inline-flex flex-col ml-8 list-disc">
	<li style="text-decoration: line-through;">add a post about something</li>
	<li>add more detailed project breakdowns</li>
	<li>add analytics to track your every movement muahaha</li>
	<li>remove remaining capital letters</li>
</ul>
