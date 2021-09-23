# common
 ```js
module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
  },
  rules: {
    /**
     * 全等
     */
    "eqeqeq": 2,
    /**
     * 在箭头函数中的箭头前后强制保持一致的间距
     */
    "arrow-spacing": [2, { "before": true, "after": true }],
    /**
     * 不强制 const 还是let
     */
    "prefer-const": 2, // 
    /**
     * 解构 对象
     */
    "prefer-destructuring": [
      2,
      {
        "array": false,
        "object": true
      }
    ],
    /**
     * 不强制 最后一个
     */
    "comma-dangle": 0,
    /**
     * 不判断对象方法里是否使用了 this
     */
    "class-methods-use-this": 0,
    /**
     * 在生成器函数中的`*`运算符周围强制保持一致的间距
     */
    "generator-star-spacing": 0,
    /**
     * 在“function”定义的左括号前强制使用一致的间距
     */
    "space-before-function-paren": 0,
    /**
     * 首行缩进
     */
    "indent": ["error", 2, { "SwitchCase": 1 }],
    /**
     * 强制使用反撇号、双引号或单引号
     */
    "quotes": ["error", "single"],
    /**
     * 使用分号
     */
    "semi": ["error", "never"],
    /**
     * 不能使用console
     */
    "no-console": 2,
    /**
     * 不能使用debugger
     */
    "no-debugger": 2,
    /**
     * 循环里的 await
     */
    "no-await-in-loop": 0,
    /**
     * 允许连续空行
     */
    "no-multiple-empty-lines": 0, 
    /**
     * 属性使用双引号
     */
    "jsx-quotes": ["error", "prefer-double"],
  }
}
```