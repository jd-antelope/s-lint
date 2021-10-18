/**
 * @rulesName 声明
 * @rulesDesc 对模块内属性及属性的值进行约束，是否空格、换行，属性黑白名单等
 */

"use strict";

module.exports = {

    // !important的!之后禁止空格
    "declaration-bang-space-after": [
        "never",
        {
            message: "!important的!之后禁止空格"
        }
    ],

    // !important的!之前要求空格
    "declaration-bang-space-before": [
        "always",
        {
            message: "!important的!之前要求空格"
        }
    ],

    // 属性应该为速写
    /* 
    违规：
    a {
        padding-top: 1px;
        padding-right: 2px;
        padding-bottom: 3px;
        padding-left: 4px; 
    }
    合规：
    a {
        padding: 1px 2px 3px 4px;
    } */
    "declaration-block-no-redundant-longhand-properties": [
        true,
        {
            message: "属性应该为速写"
        }
    ],

    // 禁止覆盖相关普通属性的速记属性
    /*     
    违规：
    a {
        padding-left: 10px;
        padding: 20px;
      }
    合规：
    a {
        padding: 20px;
        padding-left: 10px;
      } 
    */
    "declaration-block-no-shorthand-property-overrides": [
        true,
        {
            message: "禁止覆盖相关普通属性的速记属性"
        }
    ],

    // 内容必须以分号后分行进行显示
    "declaration-block-semicolon-newline-after": [
        "always",
        {
            message: "内容必须以分号后分行进行显示"
        }
    ],

    // 在属性的分号之前禁止有空白
    "declaration-block-semicolon-newline-before": [
        "never-multi-line",
        {
            message: "在属性的分号之前禁止有空白"
        }
    ],

    // 单行属性分号后一个空格，多行分号后禁止空格
    "declaration-block-semicolon-space-after": [
        "always-single-line",
        {
            message: "单行属性分号后一个空格，多行分号后禁止空格"
        }
    ],

    // 在属性的分号之前禁止有空格
    "declaration-block-semicolon-space-before": [
        "never",
        {
            message: "在属性的分号之前禁止有空格"
        }
    ],

    // 单行模块中的属性数量最多为1
    "declaration-block-single-line-max-declarations": [
        1,
        {
            message: "单行模块中的属性数量最多为1"
        }
    ],

    // 模块内最后一个属性必须有分号
    "declaration-block-trailing-semicolon": [
        "always", {
            message: "模块内最后一个属性必须有分号"
        }
    ],

    // 在属性的冒号后需要空格禁止换行，关闭
    "declaration-colon-newline-after": null,

    // 在属性的冒号之后要求有一个空格
    "declaration-colon-space-after": [
        "always",
        {
            message: " 在属性的冒号之后要求有一个空格"
        }
    ],

    // 在属性的冒号之前禁止空格
    "declaration-colon-space-before": [
        "never",
        {
            message: " 在属性的冒号之前禁止空格"
        }
    ],

    // 在属性前禁止空行
    "declaration-empty-line-before": [
        "never",
        {
            ignore: ["after-comment"],
            message: " 在属性前禁止空行"
        }
    ],

    // 禁止使用!important，关闭
    "declaration-no-important": null,

    // 在模块中指定允许的属性和单位对列表
    "declaration-property-unit-allowed-list":  null,

    // 在模块中指定不允许的属性和单位对列表，关闭
    "declaration-property-unit-blacklist": null,

    // 在模块中指定不允许的属性和单位对列表，关闭
    "declaration-property-unit-disallowed-list": null,

    // 在声明中指定允许的属性和值对列表，关闭
    "declaration-property-value-allowed-list": null,

    // 在模块中指定不允许的属性和值对列表
    "declaration-property-value-disallowed-list": {
        "/border/": ["/thin/", "/medium/", "/thick/"]
    },
};
