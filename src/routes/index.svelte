<script lang="ts">
	import Socials from '../components/Socials.svelte';
	import Meta from '../components/Meta.svelte';
	import Slider from '../components/Slider.svelte';
	import { SiteData } from '../site';

	let portfolioItem = SiteData.portfolio[0];
</script>

<Meta title="Homepage" description="this website has stuff about me and the work ive done." />

<!-- <BasicMeta url={"/"} />
<OpenGraphMeta url={"/"} />
<TwitterCardMeta url={"/"} /> -->
<div class="flex flex-col items-center">
	<div class="sm:flex-row flex flex-col items-center py-4 space-x-8">
		<img
			alt="face of aryan mann"
			class="max-h-24 rounded-full shadow-xl"
			src="https://avatars.githubusercontent.com/u/18741614"
		/>
		<h1 class="text-4xl">hi! i'm aryan mann.</h1>
	</div>
	<h3 class="py-2 text-xl text-center">this website has stuff about me and the work ive done.</h3>
</div>
<div class="bg-secondary-50 relative px-4 pt-6 pb-4 mt-10 mb-2 text-xl">
	<p class="absolute left-4 top-[-20px] rounded-sm bg-primary-800 px-2 py-1 text-white">
		working on..
	</p>
	currently im working in the{' '}<b>computer vision</b> team at{' '}
	<b>unity</b>, building tools and infrastructure to run synthetic data simulations (that utilize
	sidefx houdini and adobe substance) at scale.
</div>
<Socials />
<h3 class="w-full py-4 mt-8 text-xl text-center">
	<a href="/portfolio">work portfolio</a>
</h3>
<Slider items={SiteData.portfolio} bind:currentItem={portfolioItem}>
	{#if portfolioItem}
		<div class="flex flex-col">
			<a
				class="text-xl no-underline font-bold hover:text-primary-700 text-center w-full"
				href={`https://${portfolioItem.website}`}>{portfolioItem.website}</a
			>
			<img class="shadow" alt="" src={portfolioItem.image} />
			{#if portfolioItem.description}
				<p class="mt-3">{portfolioItem.description}</p>
			{/if}
		</div>
	{/if}
</Slider>
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
<h3 class="py-4 mt-8 text-xl">todo list</h3>
<ul class="inline-flex flex-col ml-8 list-disc">
	<li style="text-decoration: line-through;">add a post about something</li>
	<li>add more detailed project breakdowns</li>
	<li>add analytics to track your every movement muahaha</li>
	<li>remove remaining capital letters</li>
</ul>
