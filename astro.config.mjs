// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), mdx()],

  // Self-hosted fonts with metric-matched fallbacks: no flash from a late webfont swap.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Jost",
      cssVariable: "--font-jost",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Cormorant Garamond",
      cssVariable: "--font-cormorant",
      weights: [500, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
