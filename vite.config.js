import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [vue()],
  build: {
    outDir: "target/dist"
  }
});
