/**
 * @rulesName 禁用
 * @rulesDesc no指的是@import、注释、选择器、动画、空白符限制空行、优先级处理等
 */

"use strict";

module.exports = {
  // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
  "no-descending-specificity": true,
  
  // 禁止在样式表中使用重复的 @import 规则
  "no-duplicate-at-import-rules": true,
  
  // 禁止样式表中的重复选择器。
  "no-duplicate-selectors": true,
  
  // 禁止空源码。
  "no-empty-source": true,
  
  // 禁止额外的分号（可自动修复）
  "no-extra-semicolons": true,
  
  // 禁止 CSS 不支持并可能导致意外结果的双斜杠注释（//...）
  "no-invalid-double-slash-comments": true,
  
  // 禁止未知的动画。
  "no-unknown-animations": true,

  //禁止行尾空白符（可自动修复）
  "no-eol-whitespace": [
    true,
    {
      ignore: ['empty-lines'],
    }
  ],

  // 禁止缺少源码结尾换行符（可自动修复）
  "no-missing-end-of-source-newline": true,

  // 禁止空第一行（可自动修复）
  "no-empty-first-line": true
};