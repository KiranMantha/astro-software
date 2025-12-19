import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "/astro-software/",
  build: {
    target: "esnext", // Modern browsers; adjust if needed
    minify: "esbuild", // Efficient minification
    sourcemap: false, // Disable for production (optional)
    // assetsDir: "",
    outDir: "docs",
  },
});
