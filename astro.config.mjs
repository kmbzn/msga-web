import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.GITHUB_PAGES ? 'https://kmbzn.github.io' : undefined,
  base: process.env.GITHUB_PAGES ? '/msga-web' : '/',
  integrations: [tailwind()]
});
