/**
 * @rulesName 注释
 * @rulesDesc 禁止空注释，注释前要求空行，要求注释标记内部有空格
 */

"use strict";

module.exports = {
  // 在注释中指定不允许使用的单词列表
  "comment-word-disallowed-list": [
    "/TODO|FIXME/i",
    {
      "severity": "warning",
      message: "TODO和FIXME不要出现在注释中，希望你解决掉"
    }
  ],

  // 注释前要求空行
  "comment-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["stylelint-commands", "after-comment"]
    }
  ],

  // 禁止空注释
  "comment-no-empty": [
    true,
    {
      message: "注释不能为空"
    }
  ],

  // 要求注释标记内部有空格
  "comment-whitespace-inside": [
    "always",
    {
      message: "要求注释标记内部有空格"
    }
  ],
};
