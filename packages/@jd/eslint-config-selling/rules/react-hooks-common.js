/**
 * @rulesName react-hooks
 * @rulesDesc 对于react-hooks的所有公共限制
 */

'use strict'

module.exports = {
  /**
   * 检查 Hook 的规则
   */
  "react-hooks/rules-of-hooks": "error",
  /**
   * 检查 effect 的依赖
   */
  "react-hooks/exhaustive-deps": "warn",
}