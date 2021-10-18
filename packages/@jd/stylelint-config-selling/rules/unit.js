/**
 * @rulesName 单位
 * @rulesDesc 指定属性的值的允许或禁止的单位
 */

"use strict";

module.exports = {
    // 指定允许的单位列表，关闭
    "unit-allowed-list": null,
    
    // 指定不允许的单位列表，关闭
    "unit-disallowed-list": null,
    
    // 为单位指定小写或大写。
    "unit-case": "lower",
    
    // 禁止未知单位
    "unit-no-unknown": true
};
