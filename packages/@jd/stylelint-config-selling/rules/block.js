/**
 * @rulesName 块
 * @rulesDesc {}围起来的块，不允许有空的块，空前、后对空格和换行有一定要求
 */

"use strict";

module.exports = {
  // 在块的右大括号之前禁止空行，嵌套规则时，要求空行
  "block-closing-brace-empty-line-before": [
    "never", {
      "except": ["after-closing-brace"]
    }
  ],

  // 在闭括号之后要求有一个换行符或禁止有空白
  "block-closing-brace-newline-after": [
    "always", {
      "ignoreAtRules": [
        "if",
        "else"
      ]
    }],

  // 在右大括号之前必须有一个换行符
  // "block-closing-brace-newline-before": [
  //   "always",
  //   {
  //     message: "在右大括号之前必须有一个换行符"
  //   }
  // ],

  // // 在块的右大括号之后需要一个空格
  // "block-closing-brace-space-after": [
  //   "always",
  //   {
  //     message: "在块的右大括号之后需要一个空格"
  //   }
  // ],

  // // 在块的右大括号之前要求有空格
  // "block-closing-brace-space-before": [
  //   "always",
  //   {
  //     message: "在块的右大括号之前要求有空格"
  //   }
  // ],

  // 不允许模块内为空
  "block-no-empty": [
    true,
    {
      message: "不允许模块内为空"
    }
  ],

  // 在块的开始大括号之后需要换行
  // "block-opening-brace-newline-after": [
  //   "always",
  //   {
  //     message: "在块的开始大括号之后需要换行符"
  //   }
  // ],

  // // 在块的左大括号之前不需要换行符
  // "block-opening-brace-newline-before": [
  //   "never-multi-line",
  //   {
  //     message: "在块的左大括号之前不需要换行符"
  //   }
  // ],

  // 在块的左大括号后要求有空格
  // "block-opening-brace-space-after": [
  //   "always",
  //   {
  //     message: "在块的左大括号后要求有空格"
  //   }
  // ],

  // 在块的左大括号之前需要一个空格
  // "block-opening-brace-space-before": [
  //   "always", {
  //     message: "在块的左大括号之前需要一个空格"
  //   }
  // ],
};
