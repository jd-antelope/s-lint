/**
 * @rulesName 选择器
 * @rulesDesc 指定允许和禁止的选择器模式，空前、后对空格和换行有一定要求
 */

"use strict";

module.exports = {

  // 要求或禁止特性值使用引号
  "selector-attribute-quotes": "always",

  // 禁止使用浏览器引擎前缀
  "selector-no-vendor-prefix": [
    true,
    {
      message: "禁止使用浏览器引擎前缀"
    }
  ],

  // 禁用 id 选择器
  "selector-max-id": [
    0,
    {
      message: "禁用 id 选择器"
    }
  ],

  // 禁止使用类型对选择器定义属性
  "selector-no-qualifying-type": [
    true,
    {
      ignore: [
        "attribute"
      ]
    }
  ],

  // 禁用通配符选择器
  "selector-max-universal": 0,

  "selector-list-comma-space-after": "always-single-line",

  // 要求在选择器列表的逗号之前有一个空格，或禁止有空白
  "selector-list-comma-space-before": "never",

  // 用逗号隔开的多个选择符，每个应该单独一行
  "selector-list-comma-newline-after": "always-multi-line",

  // 禁止使用未知的伪类选择器
  "selector-pseudo-class-no-unknown": [
    true,
    {
      ignorePseudoClasses: [
        "global"
      ]
    }
  ],

  // 在属性选择器中的括号内需要一个空格
  "selector-attribute-brackets-space-inside": "always",

  // 指定不允许的属性运算符列表
  "selector-attribute-operator-disallowed-list": ["*="],

  // 属性选择器中的操作符后需要一个空格
  "selector-attribute-operator-space-after": "always",

  // 在属性选择器中的运算符之前需要一个空格。
  "selector-attribute-operator-space-before": "always",

  // 指定允许的属性运算符列表，关闭
  "selector-attribute-operator-allowed-list": null,

  // 为类选择器指定一个规则
  "selector-class-pattern": [
    "^[a-z]+([a-z0-9-_]+)?$",
    {
      resolveNestedSelectors: true
    }
  ],

  // 要求在选择符的组合符后使用单个空格
  "selector-combinator-space-after": "always",

  // 要求在选择符的组合符前使用单个空格
  "selector-combinator-space-before": "always",

  // 指定不允许的组合器列表，关闭
  "selector-combinator-disallowed-list": null,

  // 指定允许的组合子列表，关闭
  "selector-combinator-allowed-list": null,

  // 禁止选择器的后代组合符使用非空格字符
  // "selector-descendant-combinator-no-non-space": false,

  // 为ID选择器指定一个规则
  "selector-id-pattern": "^[a-z]+([a-z0-9-_]+)?$",

  // 限制选择器中属性选择器的数量，关闭
  "selector-max-attribute": null,

  // 限制选择器中类的数量
  "selector-max-class": 3,

  // 限制选择器中组合子的数量
  "selector-max-combinators": 5,

  // 限制选择器中复合选择器的数量
  "selector-max-compound-selectors": 3,

  // 限制选择器中相邻空行的数量
  "selector-max-empty-lines": 0,

  // 限制选择器中伪类的数量
  "selector-max-pseudo-class": 1,

  // 限制选择器的特异性。
  // "selector-max-specificity": "0,2,0",

  // 限制选择器中类型选择器的数量
  "selector-max-type": 2,

  // 为内嵌规则的选择器指定规则
  "selector-nested-pattern": "^&(:hover|focus|active|visited|focus-within|focus-visible|target)?(-.*)?",

  // 指定不允许的伪类选择器列表，关闭
  "selector-pseudo-class-disallowed-list": null,

  // 为伪类选择器指定小写或大写。
  "selector-pseudo-class-case": "lower",

  // 伪类选择器中的括号内需要一个空格或不允许有空格。
  "selector-pseudo-class-parentheses-space-inside": "never",

  // 指定允许的伪类选择器列表
  "selector-pseudo-class-allowed-list": ["hover", "focus", "active", "visited", "/^first-/", "/^last-/", "/^nth-/"],

  // 为伪元素选择器指定小写或大写
  "selector-pseudo-element-case": "lower",

  // 为适用的伪元素指定单或双冒号表示法。
  "selector-pseudo-element-colon-notation": "double",

  // 禁止未知的伪元素选择器
  "selector-pseudo-element-no-unknown": true,

  // 指定不允许的伪元素选择器列表，关闭
  "selector-pseudo-element-disallowed-list": null,

  // 指定允许的伪元素选择器列表，关闭
  "selector-pseudo-element-allowed-list": null,

  // 为类型选择器指定小写
  "selector-type-case": "lower",

  // 禁止未知类型选择器
  "selector-type-no-unknown": [
    true,
    {
      ignoreTypes: ["noindex"]
    }
  ],

  // 在选择器列表的逗号之前需要换行符或不允许有空格
  "selector-list-comma-newline-before": "never-multi-line",

  // 在选择器列表的逗号之后需要一个空格或不允许有空格
  "selector-list-comma-space-after": "always",

  // 在选择器列表的逗号之前不允许有空格。
  "selector-list-comma-space-before": "never"
};
