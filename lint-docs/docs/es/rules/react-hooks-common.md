# react-hooks
 **为 ESLint 反应特定的 react-hooks 规则。具体规则：https://www.npmjs.com/package/eslint-plugin-react-hooks** 
 
 具体规则如下：
 ```js
module.exports = {
  /**
   * 检查 Hook 的规则
   */
  "react-hooks/rules-of-hooks": "error",
  /**
   * 检查 effect 的依赖
   */
  "react-hooks/exhaustive-deps": "warn",
}```