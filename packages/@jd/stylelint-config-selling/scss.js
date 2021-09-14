"use strict";

const coreRules = require("./rules/core");
const orderRules = require("./rules/order");
const scssRules = require("./rules/scss");

module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  rules: Object.assign({}, coreRules, scssRules, orderRules, {
    // 可以针对scss覆盖rules
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else"],
        "message": "规则前必须加空行"
      }
    ]
  })
};
