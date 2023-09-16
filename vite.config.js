import { defineConfig } from "vite";

const config = defineConfig({
  root: "src",
  base: "/WB_LVL_2_middleearth/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});

export default config;
