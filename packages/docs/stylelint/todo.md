## 1、rules
按照前缀分为26类模块，具体可见https://stylelint.io/user-guide/rules/list，将规则写入路径`packages/@jd/stylelint-config-selling/rules/core`，如果制定规则中觉得有歧义，需要小组评审的，拿出来放在packages/docs/stylelint/unsure.md

| 模块 | 模块中文 | 负责人 | 状态
|  ----  |  ----  |  ----  |  -- | 
| at-rule | 规则-14   |  郑修月  |
| block   | 块-10     |  郑修月  |
| color、hue   | 颜色-7   |  郑修月  |  进行中
| comment | 注释-6   |  郑修月  |  已完成、待评审
| custom  | 自定义-3 |  郑修月  |  未开始
| declaration | 声明-25 | 郑修月 |  未开始
| font | 字体-4 | 郑修月
| function | 函数-22 | 郑修月
| indentation | 缩进-1 | 郑修月
| keyframe | 关键帧-2 | 郑修月
| length | 长度-1 |  郑修月  |  已完成、待评审
| linebreaks | 换行符-1 | 郑修月  |  已完成、待评审
| max | 最大-3 | 霍中意
| media | 媒体-19 | 霍中意
| name | 命名-1 | 霍中意
| no | 无-12 | 霍中意
| number | 数字-3 | 霍中意
| property | 属性-7 | 霍中意
| rule | 规则-1   |  霍中意  |
| selector | 选择器-51 | 陈磊
| shorthand | 速记-1 | 陈磊
| string | 字符串-2 | 陈磊
| time | 时间-1 | 陈磊
| unicode | 编码-1 | 陈磊
| unit | 单元-6 | 陈磊
| value | 值-5 | 陈磊

## 2、order
确定排序顺序

## 3、文档
整理规范文档