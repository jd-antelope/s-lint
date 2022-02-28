/**
 * @rulesName 函数
 * @rulesDesc 对函数(如scale、translate、url等)的使用进行约束，是否需要空白、换行，属性值允许和禁止的列表等
 */

"use strict";

module.exports = {

  // 指定允许的函数列表，关闭
  "function-allowed-list": null,

  // 禁止在calc函数中使用无效表达式
  "function-calc-no-invalid": [
    true,
    {
      message: '禁止在calc函数中使用无效表达式'
    }
  ],

  // 禁止在calc函数中使用无间隔的运算符
  "function-calc-no-unspaced-operator": [
    true,
    {
      message: '禁止在calc函数中使用无间隔的运算符'
    }
  ],

  // 在函数多行的逗号之后换行
  "function-comma-newline-after": [
    "always-multi-line",
    {
      message: '在函数多行的逗号之后换行'
    }
  ],

  // 在逗号前添加新行
  "function-comma-newline-before": [
    "always-multi-line",
    {
      message: '在逗号前添加新行'
    }
  ],

  // 在函数的逗号后需要一个空格
  "function-comma-space-after": [
    "always",
    {
      message: '在逗号前添加新行'
    }
  ],

  // 在函数的逗号之前不允许有空格
  "function-comma-space-before": [
    "never",
    {
      message: '在函数的逗号之前不允许有空格'
    }
  ],

  // 指定不允许的函数列表，关闭
  "function-disallowed-list": null,

  // 禁止在linear-gradient()根据标准语法无效的调用中使用方向值
  "function-linear-gradient-no-nonstandard-direction": [
    true,
    {
      message: '禁止在linear-gradient()根据标准语法无效的调用中使用方向值'
    }
  ],

  // 限制函数中相邻的空行数量
  "function-max-empty-lines": [
    1,
    {
      message: '限制函数中相邻的空行数量为1'
    }
  ],

  // 为函数名称指定小写
  "function-name-case": [
    "lower",
    {
      message: '为函数名称指定小写'
    }
  ],

  // 函数的括号内不允许换行
  "function-parentheses-newline-inside": [
    "never-multi-line",
    {
      message: '函数的括号内不允许换行'
    }
  ],

  // 在函数的括号内不允许有空格
  "function-parentheses-space-inside": [
    "never",
    {
      message: '在函数的括号内不允许有空格'
    }
  ],

  // 禁止使用以//开头的url
  "function-url-no-scheme-relative": [
    true,
    {
      message: '禁止使用以//开头的url'
    }
  ],

  // 要求url使用引号
  "function-url-quotes": [
    "always",
    {
      message: "要求url使用引号"
    }
  ],

  // 指定允许的URL方案列表
  "function-url-scheme-allowed-list": null,

  // 指定不允许的URL方案列表，关闭
  "function-url-scheme-disallowed-list": null,

  // 要求函数后有空格
  "function-whitespace-after": [
    "always",
    {
      message: "要求函数后有空格"
    }
  ],
};
