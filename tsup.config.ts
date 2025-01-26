import { defineConfig } from "tsup";
import fs from "fs-extra";

export default defineConfig({
  entry: [
    "src/components/**/*.ts",
    "src/components/**/*.tsx",
    "src/lib/**/*.ts",
    "src/components/**/*.css",
    "src/tailwind.css",
    "!src/**/*.test.*",
    "!src/**/*.stories.*",
  ],
  format: ["cjs", "esm"],
  dts: true,
  bundle: false,
  outDir: "dist",
  clean: true,
  async onSuccess() {
    await fs.copy('src/tailwind.css', 'dist/tailwind.css');
  },
  external: ["react", "react-dom"]
});