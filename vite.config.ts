import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/portfolio/",
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.webp"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/styles/mixins.scss";`,
      },
    },
  },
  build: {
    outDir: "./dist",
    sourcemap: false,
    emptyOutDir: true,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        assetFileNames: "assets/[hash].[ext]",
        entryFileNames: "chunks/[name]-[hash].js",
        chunkFileNames: "chunks/[hash].js",
        manualChunks(id: string) {
          if (id.includes("node_modules/three")) return "vendor-three";
          if (id.includes("node_modules/gsap")) return "vendor-gsap";
          if (id.includes("node_modules/vue")) return "vendor-vue";
        },
      },
    },
  },
});
