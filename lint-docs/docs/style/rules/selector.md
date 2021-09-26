# selector
 >  
 
 具体规则如下：
 ```js
module.exports = {
  // 要求或禁止特性值使用引号
  "selector-attribute-quotes": "always",
  // 禁止使用浏览器引擎前缀
  "selector-no-vendor-prefix": [true, {"message": "禁止使用浏览器引擎前缀"}],
  // 禁用 id 选择器
  "selector-max-id": [0, {"message":"禁用 id 选择器"}],
  // 禁止使用类型对选择器定义属性
  "selector-no-qualifying-type":[true,{
    "ignore":[
      "attribute"
    ]
  }],
  // 禁用通配符选择器
  "selector-max-universal": 0,
  "selector-list-comma-space-after": "always-single-line",
  // 要求在选择器列表的逗号之前有一个空格，或禁止有空白
  "selector-list-comma-space-before": "never",
  // 用逗号隔开的多个选择符，每个应该单独一行
  "selector-list-comma-newline-after": "always-multi-line",
  // 禁止使用未知的伪类选择器
  "selector-pseudo-class-no-unknown":[true,{
    "ignorePseudoClasses":[
      "global"
    ]
  }]

  // 待定
  // "selector-attribute-brackets-space-inside": "never",
  // "selector-attribute-operator-blacklist": null,
  // "selector-attribute-operator-space-after": "never",
  // "selector-attribute-operator-space-before": "never",
  // "selector-attribute-operator-whitelist": null,
  // "selector-class-pattern": [
  //   "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
  //   {
  //     resolveNestedSelectors: true
  //   }
  // ],
  // "selector-combinator-space-after": "always",
  // "selector-combinator-space-before": "always",
  // "selector-combinator-blacklist": null,
  // "selector-combinator-whitelist": null,
  // "selector-descendant-combinator-no-non-space": true,
  // "selector-id-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
  // "selector-max-attribute": 2,
  // "selector-max-class": 5,
  // "selector-max-combinators": 5,
  // "selector-max-compound-selectors": 5,
  // "selector-max-empty-lines": 0,
  // // Maybe enable in future
  // "selector-max-pseudo-class": null,
  // "selector-max-specificity": "0,5,0",
  // "selector-max-type": 3,
  // "selector-nested-pattern": null,
  // "selector-pseudo-class-blacklist": null,
  // "selector-pseudo-class-case": "lower",
  // "selector-pseudo-class-parentheses-space-inside": "never",
  // "selector-pseudo-class-whitelist": null,
  // "selector-pseudo-element-case": "lower",
  // "selector-pseudo-element-colon-notation": "double",
  // "selector-pseudo-element-no-unknown": true,
  // "selector-pseudo-element-blacklist": null,
  // "selector-pseudo-element-whitelist": null,
  // "selector-type-case": "lower",
  // "selector-type-no-unknown": [
  //   true,
  //   {
  //     ignoreTypes: ["noindex"]
  //   }
  // ],
  // "selector-list-comma-newline-after": "always",
  // "selector-list-comma-newline-before": null,
  // "selector-list-comma-space-after": null,
  // "selector-list-comma-space-before": "never"
};
```