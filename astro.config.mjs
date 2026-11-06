// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import babel from "@rolldown/plugin-babel";
import stylex from "@stylexjs/unplugin/vite";
import variants from "@stylex-variants/core/babel";
import { fileURLToPath } from "node:url";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown()],
  // Keep the CSS asset that StyleX appends its generated rules to.
  build: { inlineStylesheets: "never" },
  vite: {
    plugins: [
      babel({ plugins: [variants] }),
      stylex({
        useCSSLayers: true,
        aliases: {
          "~/*": [fileURLToPath(new URL("./src/*", import.meta.url))],
        },
      }),
    ],
  },
});
