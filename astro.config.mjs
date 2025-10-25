// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://NathanaelMaillot.github.io/portfolio-trolet',
  base: '/portfolio-trolet',
  vite: {
    plugins: [tailwindcss()],
  },
});
