# comment
 ```
"use strict";

module.exports = {
  // 在评论中指定不允许使用的单词列表
  "comment-word-disallowed-list": ["/TODO|FIXME/i", {"severity": "warning", "message": "TODO和FIXME不要出现在注释中，希望你解决掉"}],

  // 评论前要求或禁止空行。
  "comment-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["stylelint-commands", "after-comment"]
    }
  ],
  // 禁止空评论
  "comment-no-empty": [true, {"message":"注释不能为空"}], 

  // 要求或禁止评论标记内部有空格
  "comment-whitespace-inside": ["always", {"message":"要求评论标记内部有空格"}], 
};
```