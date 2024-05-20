import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  site: "https://simplicity.cl/owine",
  base: "/owine",
  outDir: "./owine",
  build: {
    assetsPrefix: "https://simplicity.cl/owine",
  },
  image: {
    service: passthroughImageService(),
  },
});
