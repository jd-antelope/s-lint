# general
 ```
"use strict";

module.exports = {
  // 限制允许嵌套的深度
  "max-nesting-depth": [4, {"message": "限制允许嵌套的深度：4"}],
  // 限制选择器的优先级
  // "selector-max-specificity": ["0,5,2", {"message":"id,class,type 优先级为 0,5,2"}],
  // 不允许多余的分号
  "no-extra-semicolons": [true, {"message": "不允许多余的分号"}],
  // 禁止低优先级的选择器出现在高优先级的选择器之后
  "no-descending-specificity": null,
  // 禁止动画名称与 @keyframes 声明不符
  "no-unknown-animations": true,
  // 禁止行尾空白
  "no-eol-whitespace": null

  // 待定
  // indentation: [2],
  // linebreaks: "unix",
  // "max-empty-lines": 1,
  // "max-line-length": [120, { ignore: ["comments"] }],
  // "no-duplicate-at-import-rules": true,
  // "no-duplicate-selectors": true,
  // "no-empty-source": true,
  // "no-invalid-double-slash-comments": true,
  // "no-missing-end-of-source-newline": true,
  // "no-empty-first-line": true
};
```