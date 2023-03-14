import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
import FaSpotify from 'svelte-icons/fa/FaSpotify.svelte';
import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte';

export const SiteData = {
	base_url: 'https://aryanmann.com',
	site_title: "aryan's website",
	author: 'Aryan Mann',
	title_functor: (title) => `${title} | Aryan Mann`,
	site_description:
		'a blog containing posts about things like tech, philosophy, tech, and philosophy. maybe some book stuff too.',
	site_keywords: ['Next.js', 'Netlify', 'React'],
	posts_per_page: 5,
	socials: [
		{ title: 'Github', url: 'https://github.com/aryan-mann', icon: FaGithub },
		{ title: 'Spotify', url: 'https://open.spotify.com/user/aryan_mann', icon: FaSpotify },
		{ title: 'Email', url: 'mailto:aryan.21.mann@gmail.com', icon: FaMailBulk }
	],
	menuLinks: [
		{ label: 'home', url: '/' },
		{ label: 'blog', url: '/posts' },
		{ label: 'résumé (pdf)', url: '/AryanMann_Resume_Engineer.pdf' },
		{ label: 'résumé (docx)', url: '/AryanMann_Resume_Engineer.docx' }
	],
	portfolio: [
		{
			website: 'amchemproducts.com',
			image: '/images/sc_amc.jpg',
			description:
				"Official website of Amchem Products Pvt. Ltd. Made from the ground up using NextJS, React, and Tailwind. Meta tags & JSON-LD injected using Helmet for a proper SEO experience. Aiming and acheiving that perfect 10/10 score on Google's Lighthouse =)"
		},
		{
			website: 'drythane.com',
			image: '/images/sc_dry.jpg',
			description:
				'Official website of Drythane. Built with React & Gatsby using a custom Gatsby theme that uses shadowing to share structure between drythane.com and amshielddeck.com but with completely different themeing and content.'
		},
		{
			displayName: 'com.unity.perception',
			website: 'github.com/Unity-Technologies/com.unity.perception',
			image: '/images/sc_perception.png',
			description:
				'A Unity toolkit for creating high variance synthetic data with ground truth such as bounding boxes, segmentation maps, labeling of occlusion percentages, etc. Used by dozens of computer vision projects that saw significant improvement in model performance.'
		},
		{
			website: 'amshielddeck.com',
			image: '/images/sc_ams.jpg',
			description:
				'Official website of Amshield Deck. Built with React & Gatsby using a custom Gatsby theme that uses shadowing to share structure between amshielddeck.com and drythane.com but with completely different themeing and content.'
		},
		{
			website: 'aryanmann.com',
			image: '/images/sc_ari.jpg',
			description:
				'My own personal website with a tiny blog. Powered by Svelte under the hood with all custom components made using Tailwind. The blog uses MDX for the posts which also allows embedding of Svelte code (among other things such as Markdown).'
		},
		{
			website: 'popos.aryanmann.com',
			image: '/images/sc_pop.jpg',
			description:
				'A tiny side project to find, rate, and showcase POPOS (Privately Owned Public Open Spaces) in San Francisco. Also uses Svelte and GeoLocation to find you the best POPO near you. One click and you are own your way to a working space.'
		}
	]
};
