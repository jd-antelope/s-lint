/**
 * @rulesName 字符串
 * @rulesDesc 限制字符串使用的引号和内容
 */

"use strict";

module.exports = {
  // 指定字符串使用单引号还是双引号
  "string-quotes": [
    "double",
    {
      message:
        "字符串必须使用双引号"
    }
  ],

  // 禁止在字符串中使用（未转义）换行符
  "string-no-newline": true
};
