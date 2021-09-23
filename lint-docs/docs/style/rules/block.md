# block
 ```js
"use strict";

module.exports = {
  //在闭括号之后要求有一个换行符或禁止有空白
  "block-closing-brace-newline-after":["always",{
    "ignoreAtRules": [
        "if",
        "else"
    ]
  }],
  // 不允许模块内为空
  "block-no-empty": [true, {"message":"不允许模块内为空"}]
    
  // 待定
//   "block-closing-brace-newline-after": "always",
//   "block-closing-brace-newline-before": "always",
//   "block-closing-brace-space-after": null,
//   "block-closing-brace-space-before": null,
//   "block-opening-brace-newline-after": "always",
//   "block-opening-brace-newline-before": null,
//   "block-opening-brace-space-after": null,
//   "block-opening-brace-space-before": "always"
};
```