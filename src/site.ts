import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
import FaSpotify from 'svelte-icons/fa/FaSpotify.svelte';
import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte';
import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
// Assets
import PfOurSpaces from "@assets/images/sc_spaces.png"

export const SiteData = {
	base_url: 'https://dafirebanks.vercel.app',
	site_title: "Daniel's website",
	author: 'Daniel',
	title_functor: (title) => `${title}`,
	site_description:
		'a blog containing posts about things like tech, philosophy, tech, and philosophy. maybe some book stuff too.',
	site_keywords: ['Next.js', 'Netlify', 'React'],
	posts_per_page: 5,
	socials: [
		{ title: 'Github', url: 'https://github.com/thefirebanks', icon: FaGithub },
		{ title: 'Spotify', url: 'https://open.spotify.com/user/icolorfulunicorn?si=78c8ce7683b7408c', icon: FaSpotify },
		{ title: 'Email', url: 'mailto:dafirebanks@gmail.com', icon: FaMailBulk },
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/firebanks', icon: FaLinkedin}
	] as const,
	menuLinks: [
		{ label: 'home', url: '/' },
		{ label: 'blog', url: '/posts' },
		{ label: 'places', url: '/places'}
		// { label: 'photography', url: '/photography'},
		// { label: 'music', url: '/music' },
		// { label: 'résumé (outdated)', url: '/resumes/AryanMann_Resume_Apr28.pdf', external: true },
	] as const,
	portfolio: [
		// {
		// 	website: 'ourspac.es',
		// 	image: PfOurSpaces,
		// 	description:
		// 		'A resource for spaces available to the public around San Francisco. These spaces are vetted and selected to be as free as possible, as nice as possible, and open to the public. We have parks, POPOs, libraries, and more coming as we discover them!'
		// },
	] as const
};
