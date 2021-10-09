# 数字
 **number是对于width、height等属性的数字进行小数点、尾随的限制** 
 
 具体规则如下：
 ```js
module.exports = {
  // 小数时，不需要前面的 0
  "number-leading-zero": [
    "never",
    {
      message: "禁止小数前面的 0"
    }
  ],

  // 限制数字中允许的小数位数
  "number-max-precision": 8,

  // 禁止数量的尾随零（可自动修复）
  "number-no-trailing-zeros": true
};
```