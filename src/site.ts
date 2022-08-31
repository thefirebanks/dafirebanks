import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
import FaSpotify from 'svelte-icons/fa/FaSpotify.svelte'
import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte'

export const SiteData = {
  base_url: "https://aryanmann.com",
  site_title: "aryan's website",
  author: "Aryan Mann",
  title_functor: (title) => `${title} | Aryan Mann`,
  site_description: "a blog containing posts about things like tech, philosophy, tech, and philosophy. maybe some book stuff too.",
  site_keywords: [ "Next.js", "Netlify", "React" ],
  posts_per_page: 5,
  socials: [
    { title: "Github", url: "https://github.com/aryan-mann", icon: FaGithub },
    { title: "Spotify", url: "https://open.spotify.com/user/aryan_mann", icon: FaSpotify },
    { title: "Email", url: "mailto:aryan.21.mann@gmail.com", icon: FaMailBulk },
  ],
  menuLinks: [
    { label: "home", url: "/" },
    { label: "résumé (pdf)", url: "/AryanMann_Resume_Engineer.pdf" },
    { label: "résumé (docx)", url: "/AryanMann_Resume_Engineer.docx" },
    { label: "blog", url: "/posts" },
  ]
}