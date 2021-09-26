# react-common
 >  
 
 具体规则如下：
 ```js
module.exports = {
  extends: ["./common.js", "./typescript-common.js"],
  parserOptions: {
    "ecmaVersion": 6,
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: {
    /**
     * 属性大括号内的空格
     */
    "react/jsx-curly-spacing": [2, "always"],
    /**
     * 
     */
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    /**
     * 确保第一个属性的位置正确
     */
    "react/jsx-first-prop-new-line": [2, "multiline"],
    /**
     * 属性换行最大数量
     */
    "react/jsx-max-props-per-line": [2, { "maximum": 3 }],
    /**
     * 不需要prop-types
     */
    "react/prop-types": 0,
    /**
     * 检查 Hook 的规则
     */
    "react-hooks/rules-of-hooks": "error",
    /**
     * 检查 effect 的依赖
     */
    "react-hooks/exhaustive-deps": "warn",
    'react/no-deprecated': 0,
  }
}
```