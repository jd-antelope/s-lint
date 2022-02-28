/**
 * @rulesName 时间
 * @rulesDesc 指定过渡属性的时间参数
 */

"use strict";

module.exports = {
  // 指定时间值的最小毫秒数
  "time-min-milliseconds": [20, {
    ignore:[
      "delay"
    ]
  }]
};
