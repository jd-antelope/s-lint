/**
 * @rulesName 限制数量
 * @rulesDesc max指的是限制嵌套数量、相邻空行数量等
 */

"use strict";

module.exports = {
  // 限制允许的嵌套深度
  "max-nesting-depth": [
    4,
    {
      message: "限制允许的嵌套深度：4"
    }
  ],

  // 限制相邻空行的数量
  "max-empty-lines": [
    2,
    {
      message: "限制相邻空行的数量：2"
    }
  ],

  // 限制行的长度
  "max-line-length": null
};