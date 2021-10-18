---
sidebar_position: 1
---
# 介绍
## StyleLint规范
是商羚前端stylelint规范，目前支持`css|less`
#### 安装
```shell
npm install @jd/stylelint-config-selling -D
# OR
yarn add @jd/stylelint-config-selling --dev
```
#### 使用
在你的工程根目录下创建一个`.stylelintrc.js`配置文件

配置如下即可:
```js
module.exports = {
    "extends": "@jd/stylelint-config-selling"
}
```

如果你使用vscode编辑器，建议安装`stylelint`插件，并在设置配置文件`settings.json`中配置如下，在代码编写时会实时提示，保存是会自动修复
```json
    "stylelint.validate": [
        "css",
        "less",
        "vue", // 如果是Vue技术栈，需要加上，识别.vue文件中的style
    ],
    "css.validate": true,
    "less.validate": true,
    "stylelint.enable": true,
```
:::caution
如果项目之前安装过Stylelint相关的包，建议卸载，避免引入不必要的包。如`@stylelint`、`stylelint-config-standard`、`stylelint-order`等，直接在package.json搜索**stylelint**，相关的包全部卸载
:::
#### 规范

使用`stylelint`官方代码风格`stylelint-config-standard`；该风格是 `stylelint`汲取了`GitHub`、`Google`、`Airbnb`等；使用`stylelint-order`强制按照某个顺序进行编码

目的：
- 增加css代码的重用性和易于维护性
- 统一规范、提高协作效率
- 提升渲染性能

具体见[StyleLint规范](../style/rules/at-rule)


