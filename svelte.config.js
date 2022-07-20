import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
    mdsvex({
      extension: ".mdx",
      layout: {
        _: "./src/routes/posts/layout.svelte"
      },
      remarkPlugins: []
    }),
    preprocess({ postcss: true }),
  ],
	kit: {
		adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
	},
  extensions: [".svelte", ".mdx"]
};

export default config;
