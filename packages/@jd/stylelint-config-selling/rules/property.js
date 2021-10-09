"use strict";

module.exports = {
  // 禁止使用未知属性
  "property-no-unknown": [
    true,
    {
      ignoreProperties: ["composes","contain"]
    }
  ],

  // 指定禁用的属性的黑名单，关闭
  "property-blacklist": null,
  
  // 指定属性的大小写（可自动修复）
  "property-case": "lower",
  
  // 禁止属性的浏览器引擎前缀
  "property-no-vendor-prefix": true,
  
  // 指定允许的属性的白名单，关闭
  "property-whitelist": null
};
