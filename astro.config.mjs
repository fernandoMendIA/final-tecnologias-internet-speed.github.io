import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://fernandomendia.github.io/final-tecnologias-internet-speed.github.io', // workflow commit actions

});