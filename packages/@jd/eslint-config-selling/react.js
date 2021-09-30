const react = require("./rules/react-hooks-common.js");
const reactHooks = require("./rules/react-hooks-common.js");

module.exports = {
  extends: ["./base.js", "./typescript.js"],
  parserOptions: {
    "ecmaVersion": 6,
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: Object.assign({}, react, reactHooks)
}
