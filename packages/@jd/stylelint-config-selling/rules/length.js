/**
 * @rulesName 长度
 * @rulesDesc 禁止零长度单位
 */

"use strict";

module.exports = {
  // 禁止零长度单位
  "length-zero-no-unit": [
    true,
    {
      message: "禁止零长度单位"
    }
  ]
};
