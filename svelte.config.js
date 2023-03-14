import mdsvexConfig from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	kit: {
		adapter: vercel({
			runtime: 'nodejs18.x',
			isr: true,
			split: false
		}),
		alias: {
			'@components': path.resolve('./src/components'),
			'@types': path.resolve('./src/types/global.ts'),
			'@src': path.resolve('./src'),
			'@routes': path.resolve('./src/routes'),
			'@utils': path.resolve('./src/utils.ts')
		}
	},
	preprocess: [
		preprocess({
			postcss: {},
			sourceMap: true,
			typescript: true
		}),
		mdsvex(mdsvexConfig)
	]
};

export default config;
