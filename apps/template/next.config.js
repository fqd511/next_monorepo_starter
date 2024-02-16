/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
module.exports = {
  output: "export",
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  // Image Optimization using the default loader is not compatible with export.
  images: {
    unoptimized: true,
  },

  transpilePackages: ["@deps/ui", "@deps/core"],
  sassOptions: {
    includePaths: [path.join(__dirname, "/styles")],
  },
};
