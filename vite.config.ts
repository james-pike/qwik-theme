import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      outDir: "dist", // Ensure output goes to "dist"
      emptyOutDir: true, // Clears the directory before building
    },
    plugins: [qwikVite(), tsconfigPaths()],
  };
});
