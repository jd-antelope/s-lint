/**
 * @rulesName 值
 * @rulesDesc 对属性值空前、后对空格和换行有一定要求
 */

"use strict";

module.exports = {
  // 禁止给值添加浏览器引擎前缀，多行文本溢出省略等需要
  "value-no-vendor-prefix": null,
  
  // 属性值应该小写
  "value-keyword-case": "lower",
  
  // 在值列表的逗号之前要求有一个换行符或禁止有空白
  "value-list-comma-newline-before": "never-multi-line",
  
  // 限制值列表中相邻空行数量
  "value-list-max-empty-lines": 1,
  
  // 在值列表的逗号之后需要换行或不允许有空格
  "value-list-comma-newline-after": "always-multi-line",
  
  // 在值列表的逗号之前需要换行或不允许有空格
  "value-list-comma-newline-after": "always-multi-line",
  
  // 在值列表的逗号之后需要一个空格或不允许有空格
  "value-list-comma-space-after": "always-single-line",
  
  // 在值列表的逗号之前需要一个空格或不允许有空格。
  "value-list-comma-space-before": "never"
};
