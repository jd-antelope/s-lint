/**
 * @rulesName 简写属性
 * @rulesDesc 对简写属性和普通属性的组合值有一定要求
 */

"use strict";

module.exports = {
  // 禁止在简写属性中使用冗余值
  "shorthand-property-no-redundant-values": [true, {"message":"禁止在简写属性中使用冗余值"}],
  // 禁止覆盖相关普通属性的简写属性
  "declaration-block-no-shorthand-property-overrides": false
};
