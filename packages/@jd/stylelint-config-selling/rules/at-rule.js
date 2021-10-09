/**
 * @rulesName 关键字
 * @rulesDesc at指的是@keyframes、@import、@media...这些，使用前必须加空格、且必须小写等
 */

'use strict'

module.exports = {
  // 指定规则列表，默认全部，关闭
  'at-rule-allowed-list': null,

  // 规则禁止列表，关闭
  'at-rule-disallowed-list': null,

  // 规则前必须加空行
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
      message: '规则前必须加空行',
    },
  ],

  // 规则名称指定小写
  'at-rule-name-case': 'lower',

  // 在具有多行参数的 at-rules 中，在 at-rule 名称之后必须始终有一个换行符
  'at-rule-name-newline-after': 'always-multi-line',

  // 必须是在规则的名称后一个空格
  'at-rule-name-space-after': 'always',

  // 禁止使用未知的 at 规则,ignoreAtRules 为忽略名单
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        'extends',
        'content',
        'each',
        'else',
        'error',
        'for',
        'function',
        'include',
        'if',
        'mixin',
        'return',
        'warn',
        'while',
      ],
    },
  ],

  // 禁止在规则中使用浏览器前缀
  'at-rule-no-vendor-prefix': [
    true,
    {
      message: '禁止规则使用浏览器引擎前缀'
    }
  ],

  // 属性规则要求列表，关闭
  "at-rule-property-required-list": null,

  // 规则分号之后必须是新的行
  'at-rule-semicolon-newline-after': [
    'always',
    {
      message: '分号之后必须是新的行'
    },
  ],

  // 在 at 规则的分号之前不允许有空格
  'at-rule-semicolon-space-before': [
    'never',
    {
      message: '分号之前不要有空格'
    },
  ],

  // 规则白名单，关闭
  "at-rule-whitelist": null
}
