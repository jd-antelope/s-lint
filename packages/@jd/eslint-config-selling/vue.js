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

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    eqeqeq: 2, // 全等
    'arrow-spacing': [2, { before: true, after: true }], // 在箭头函数中的箭头前后强制保持一致的间距
    // 不强制 const 还是let
    'prefer-const': 2,
    'prefer-destructuring': [
      2,
      {
        // 解构
        array: false,
        object: true
      }
    ],
    'comma-dangle': 0, // 不强制 最后一个
    // 'space-before-function-paren': 2, // 在“function”定义的左括号前强制使用一致的间距
    indent: ['error', 2, { SwitchCase: 1 }], // 首行缩进
    quotes: ['error', 'single'], // 强制使用反撇号、双引号或单引号
    semi: ['error', 'always'], // 使用分号
    'no-await-in-loop': 0, // 循环里的 await
    '@typescript-eslint/explicit-function-return-type': 0, // 函数允许不用return
    '@typescript-eslint/no-explicit-any': 0, // 允许使用any
    '@typescript-eslint/no-inferrable-types': 0,
    'no-multi-spaces': 2,

    // vue.规范
    'vue/max-attributes-per-line': [1, { // 多个特性的元素应该分多行撰写，每个特性一行
      singleline: 10,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': 0, // 在多行元素的内容之前和之后需要换行符
    // 'vue/prop-name-casing': [1, 'camelCase'], // 在声明prop的时候，其命名应该始终使用驼峰命名
    'vue/no-use-v-if-with-v-for': [
      'error'
    ], // 不要把 v-if 和 v-for 用在同一个元素上——因为v-for 比 v-if 具有更高的优先级
  }
};