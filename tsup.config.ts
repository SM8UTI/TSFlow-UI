import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  external: [
    "react",
    "react-dom",
    "framer-motion",
    "clsx",
    "tailwind-merge",
    "lucide-react",
  ],
  injectStyle: false,
});
