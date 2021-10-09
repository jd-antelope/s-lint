/**
 * @rulesName 媒体功能
 * @rulesDesc media指的是@media 功能时限制名称、属性、空格等
 */

"use strict";

module.exports = {
  // 禁止 media 特性名称带有浏览器引擎前缀
  "media-feature-name-no-vendor-prefix": true,
  
  // 要求在媒体功能的冒号之后必须有一个空格或不能有空白符（可自动修复）。
  "media-feature-colon-space-after": "always",
  
  // 要求在媒体功能的冒号之前必须有一个空格或不能有空白符（可自动修复）。
  "media-feature-colon-space-before": "never",
  
  // 指定禁用的媒体功能名的黑名单
  "media-feature-name-blacklist": [
    "device-width",
    "device-height",
    "device-aspect-ratio"
  ],
  
  // 指定媒体功能名的大小写（可自动修复）
  "media-feature-name-case": "lower",
  
  // 禁止未知的媒体功能名
  "media-feature-name-no-unknown": true,
  
  // 指定允许的媒体功能名和值对的白名单，关闭
  "media-feature-name-value-whitelist": null,
  
  // 指定允许的媒体功能名的白名单，关闭
  "media-feature-name-whitelist": null,
  
  // 要求在媒体功能的括号内侧必须有一个空格或不能有空白符（可自动修复）。
  "media-feature-parentheses-space-inside": "never",
  
  // 要求在媒体功能的范围运算符之后必须有一个空格或不能有空白符（可自动修复）。
  "media-feature-range-operator-space-after": "always",
  
  // 要求在媒体功能的范围运算符之前必须有一个空格或不能有空白符（可自动修复）。
  "media-feature-range-operator-space-before": "always",
  
  // 要求在媒体查询列表的逗号之后必须有换行符或不能有空白符（可自动修复）。
  "media-query-list-comma-newline-after": "always-multi-line",
  
  // 要求在媒体查询列表的逗号之前必须有换行符或不能有空白符。
  "media-query-list-comma-newline-before": "never-multi-line",
  
  // 要求在媒体查询列表的逗号之后必须有一个空格或不能有空白符（可自动修复）。
  "media-query-list-comma-space-after": "always-single-line",
  
  // 要求在媒体查询列表的逗号之前必须有一个空格或不能有空白符（可自动修复）。
  "media-query-list-comma-space-before": "never"
};
