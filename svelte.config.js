import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';

const noteLayout = fileURLToPath(new URL('./src/lib/components/NoteLayout.svelte', import.meta.url));

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        _: noteLayout
      }
    })
  ],
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};

export default config;
