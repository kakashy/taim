import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		files: {
			serviceWorker: '/src/service-worker'
		},
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			},
			optimizeDeps: {
				exclude: ['pouchdb']
			},
			ssr: {
				noExternal: ['pouchdb']
			}
		}
	}
};

export default config;
