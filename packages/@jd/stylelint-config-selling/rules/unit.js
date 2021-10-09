/**
 * @rulesName 单位
 * @rulesDesc 指定属性的值的允许或禁止的单位
 */

"use strict";

module.exports = {
  // 在声明中指定允许的属性和单位对列表
  "declaration-property-unit-allowed-list": [
    {
       "font-size": ["em", "px", "rem"],
       "/^border/": ["px"],
       "/^animation/": ["s", 'ms'],
    },
    {
      "ignore": ["inside-function"],
    }],
    // 在声明中指定不允许的属性和单位对列表
    "declaration-property-unit-disallowed-list": null,
    // 禁止零长度单位
    "length-zero-no-unit": [true, {
        ignore: ["custom-properties"]
    }],
    // 指定允许的单位列表
    "unit-allowed-list": null,
    // 指定不允许的单位列表
    "unit-disallowed-list": null,
    // 为单位指定小写或大写。
    "unit-case": "lower",
    // 禁止未知单位
    "unit-no-unknown": true
};
