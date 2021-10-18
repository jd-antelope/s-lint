/**
 * selling ESLint 规则
 * https://coding.jd.com/selling-front/frontend-lint.git
 *
 * 贡献者：
 *   huozhongyi <huozhongyi@jd.com>
 *   zhengxiuyue <zhengxiuyue@jd.com>
 *   chenlei736 <chenlei736@jd.com>
 *
 * 依赖版本：
 *   
    "@babel/eslint-parser": "^7.15.4",
    "@typescript-eslint/eslint-plugin": "^4.32.0",
    "@typescript-eslint/parser": "^4.32.0",
    "@vue/eslint-config-standard": "^6.1.0",
    "@vue/eslint-config-typescript": "^7.0.0",
    "eslint": "^7.32.0",
    "eslint-config-next": "^11.1.2",
    "eslint-config-react-app": "^6.0.0",
    "eslint-config-taro": "3.2.10",
    "eslint-plugin-import": "^2.12.0",
    "eslint-plugin-react": "^7.26.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-vue": "^7.18.0"
  
 *
 */

const react = require("./rules/react-common.js");
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
