module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    /**
     * 函数允许不用return
     */
    "@typescript-eslint/explicit-function-return-type": 0,
    /**
     * 允许使用any
     */
    "@typescript-eslint/no-explicit-any": 0,
    /**
     * 消除阴影变量声明
     */
    "@typescript-eslint/no-shadow": 0
  }
}
