"use strict";

module.exports = {
  "at-rule-no-vendor-prefix": [true, {"message": "禁止规则使用浏览器引擎前缀"}],
  // 禁止使用未知的 at 规则,ignoreAtRules 为忽略名单
  "at-rule-no-unknown": [ true, {
    "ignoreAtRules": [
      "extends",
      "content",
      "each",
      "else",
      "error",
      "for",
      "function",
      "include",
      "if",
      "mixin",
      "return",
      "warn",
      "while"]
  }],
  "at-rule-empty-line-before":["always", {
      "except":[
        "blockless-after-blockless",
        "first-nested"
      ],
      "ignore":[
        "after-comment"
      ],
      "ignoreAtRules":[
        "else"
      ],
      "message": "规则前必须加空行"
  }],
  "at-rule-semicolon-newline-after": ["always", {"message": "分号之后必须是新的行"}],
  "at-rule-semicolon-space-before": ["never", {"message": "分号之前不要有空格"}]
  //待定
  // 规则后跟换行符
  // at-rule-name-newline-after: always-multi-line
  // "at-rule-blacklist": null,
  // "at-rule-name-case": "lower",
  // "at-rule-name-newline-after": null,
  // "at-rule-name-space-after": "always",
  // "at-rule-whitelist": null
};
