/**
 * @rulesName 代码行规则
 * @rulesDesc rule指的是在写css代码时前后行规则等
 */

"use strict";

module.exports = {
  "rule-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["after-comment"],
      message: "规则前必须加空行"
    }
  ]
};
