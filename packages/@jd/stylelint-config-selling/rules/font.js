/**
 * @rulesName 字体
 * @rulesDesc 对字体的类型、大小属性值进行约束，不允许重复的字体声明、font-weight值必须始终是数字等
 */

"use strict";

module.exports = {


  // 在每个不是关键字的字体系列名称周围加上引号
  "font-family-name-quotes": [
    "always-unless-keyword",
    {
      message: "在每个不是关键字的字体系列名称周围加上引号"
    }
  ],

  // 禁止重复的字体系列名称
  "font-family-no-duplicate-names": [
    true,
    {
      message: "禁止重复的字体系列名称"
    }
  ],

  // 禁止在字体系列名称列表中缺少通用系列，关闭
  "font-family-no-missing-generic-family-keyword": null,

  // 不限制font-weight值必须始终是数字
  "font-weight-notation": null

};
