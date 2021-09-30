const typescriptRule = require("./rules/typescript-common.js");

module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: Object.assign({}, typescriptRule)
}
