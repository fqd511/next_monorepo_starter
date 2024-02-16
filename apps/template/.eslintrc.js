/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@deps/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: ["postcss.config.js"],
};
