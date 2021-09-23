"use strict";

module.exports = {
    // 指定一个在声明中允许使用的属性和单位的白名单
    "declaration-property-unit-whitelist": [{
      "font-size":[
          "rem",
          "px",
          "%"
      ]
  }],
    // 在声明块的分号之前要求有一个换行符或禁止有空白
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-newline-after": ["always-multi-line", {"message":"内容必须以分号后分行进行显示"}],
    "declaration-block-trailing-semicolon": ["always", {"message":"模块内最后一个属性必须有分号"}],
    "declaration-colon-space-after": ["always", {"message": "在冒号之后要求有一个空格"}]
    // 待定
    // "declaration-bang-space-after": "never",
    // "declaration-bang-space-before": "always",
    // "declaration-colon-newline-after": null,
    // "declaration-colon-space-before": "never",
    // "declaration-empty-line-before": [
    //     "never",
    //     {
    //     ignore: ["after-comment"]
    //     }
    // ],
    // "declaration-no-important": null,
    // "declaration-property-unit-blacklist": null,
    // "declaration-property-value-blacklist": {
    //     "/border/": ["/thin/", "/medium/", "/thick/"],
    //     "/transition/": ["/all/"],
    //     "/transition-property/": ["/all/"]
    // },
    // "declaration-property-value-whitelist": null
};
