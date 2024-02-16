// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@deps/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "@deps/ui/styles",
  ],
  presets: [sharedConfig],
};

export default config;
