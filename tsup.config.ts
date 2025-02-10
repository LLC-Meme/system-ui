import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/components/**/*.ts",
    "src/components/**/*.tsx",
    "src/lib/**/*.ts",
    "src/components/**/*.css",
    "src/types/**/*.ts",
    "!src/**/*.test.*",
    "!src/**/*.stories.*",
  ],
  format: ["cjs", "esm"],
  dts: true,
  bundle: false,
  outDir: "dist",
  clean: true,
  external: ["react", "react-dom"],
});