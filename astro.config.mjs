import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  },
  site: 'https://property-hub.github.io',
  base: 'property-hub',
});