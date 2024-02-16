// tailwind config is required for editor support

import sharedConfig from "@deps/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "content" | "presets"> = {
  prefix: "ui-",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
