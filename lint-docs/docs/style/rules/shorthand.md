# 简写属性
 **对简写属性和普通属性的组合值有一定要求** 
 
 具体规则如下：
 ```js
module.exports = {
  // 禁止在简写属性中使用冗余值
  "shorthand-property-no-redundant-values": [true, {message:"禁止在简写属性中使用冗余值"}],
};
```