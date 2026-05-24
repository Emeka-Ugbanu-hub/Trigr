import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    "text/index": "src/text/index.tsx",
    "text/animations": "src/text/animations.ts",
    "paragraph/index": "src/paragraph/index.tsx",
    "paragraph/animations": "src/paragraph/animations.ts",
    "list/index": "src/list/index.tsx",
    "list/animations": "src/list/animations.ts",
    "block/index": "src/block/index.tsx",
    "block/animations": "src/block/animations.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  splitting: false,
  treeshake: true,
  minify: true,
  outDir: "dist",
  outExtension: ({ format }) => format === "cjs" ? { js: ".cjs" } : { js: ".js" },
  exports: "named",
  esbuildOptions(options) {
    options.banner = {
      js: '"use strict";',
    }
  },
})
