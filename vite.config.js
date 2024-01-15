import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  base: "./",
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild"
  },
});
