module.exports = {
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    eqeqeq: 2, // 全等
    "arrow-spacing": [2, { "before": true, "after": true }], // 在箭头函数中的箭头前后强制保持一致的间距
    "prefer-const": 2, // 不强制 const 还是let
    "prefer-destructuring": [
      2,
      {
        // 解构
        "array": false,
        "object": true
      }
    ],
    "comma-dangle": 0, // 不强制 最后一个
    "class-methods-use-this": 0, // 不判断对象方法里是否使用了 this
    "generator-star-spacing": 0, // 在生成器函数中的`*`运算符周围强制保持一致的间距
    "space-before-function-paren": 0, // 在“function”定义的左括号前强制使用一致的间距
    "indent": ["error", 2, { "SwitchCase": 1 }], // 首行缩进
    "quotes": ["error", "single"], // 强制使用反撇号、双引号或单引号
    "semi": ["error", "never"], // 使用分号
    "no-console": 2,
    "no-debugger": 2,
    "no-await-in-loop": 0, // 循环里的 await
    "no-multiple-empty-lines": 0, // 允许连续空行
    "jsx-quotes": ["error", "prefer-double"], // 属性使用双引号
    "react/jsx-curly-spacing": [2, "always"], // 属性大括号内的空格
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-first-prop-new-line": [2, "multiline"], // 确保第一个属性的位置正确
    "react/jsx-max-props-per-line": [2, { "maximum": 3 }], // 属性换行最大数量
    "react/prop-types": 0, // 不需要prop-types
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "@typescript-eslint/explicit-function-return-type": 0, // 函数允许不用return
    "@typescript-eslint/no-explicit-any": 0, // 允许使用any
    "@typescript-eslint/no-shadow": 0
  }
}
