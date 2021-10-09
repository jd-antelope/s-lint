## 1、rules
按照前缀分为26类模块，具体可见https://stylelint.io/user-guide/rules/list，将规则写入路径`packages/@jd/stylelint-config-selling/rules/core`，如果制定规则中觉得有歧义，需要小组评审的，拿出来放在packages/docs/stylelint/unsure.md

| 模块 | 模块中文 | 负责人 | 状态
|  ----  |  ----  |  ----  |  -- | 
| at-rule | 规则-14   |  郑修月  |  已完成、待评审
| block   | 块-10     |  郑修月  |  已完成、待评审
| color、hue   | 颜色-7   |  郑修月  |  已完成、待评审
| comment | 注释-6   |  郑修月  |  已完成、待评审
| custom  | 自定义-3 |  郑修月  |  已完成、待评审
| declaration | 声明-25 | 郑修月 |  已完成、待评审
| font | 字体-4 | 郑修月 | 已完成、待评审
| function | 函数-22 | 郑修月 | 已完成、待评审
| indentation | 缩进-1 | 郑修月 | 已完成、待评审
| keyframe | 关键帧-2 | 郑修月 | 已完成、待评审
| length | 长度-1 |  郑修月  |  已完成、待评审
| linebreaks | 换行符-1 | 郑修月  | 已完成、待评审
| max | 最大-3 | 霍中意  |  已完成、待评审
| media | 媒体-19 | 霍中意  |  已完成、待评审
| name | 命名-1 | 霍中意  |  无
| no | 无-12 | 霍中意  |  已完成、待评审
| number | 数字-3 | 霍中意  |  已完成、待评审
| property | 属性-7 | 霍中意  |  已完成、待评审
| rule | 规则-1   |  霍中意  |  已完成、待评审
| selector | 选择器-51 | 陈磊  |  已完成、待评审
| shorthand | 简写属性-2 | 陈磊  |  已完成、待评审
| string | 字符串-2 | 陈磊  |  已完成、待评审
| time | 时间-1 | 陈磊  |  已完成、待评审
| unicode | 编码-1 | 陈磊  |  已完成、待评审
| unit | 单位-7 | 陈磊  |  已完成、待评审
| value | 值-5 | 陈磊  |  已完成、待评审

## 2、order
确定排序顺序

## 3、文档
整理规范文档