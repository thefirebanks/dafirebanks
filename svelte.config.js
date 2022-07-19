import adapter from '@sveltejs/adapter-auto';
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
		adapter: adapter()
	},
  extensions: [".svelte", ".mdx"]
};

export default config;
