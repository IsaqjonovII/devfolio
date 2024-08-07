import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths(), svgr()],

  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },

  resolve: { alias: [{ find: "@", replacement: "/src" }] },

  base: "/",

  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild",
  },
});
