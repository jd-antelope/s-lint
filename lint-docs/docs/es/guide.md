---
sidebar_position: 1
---
# 介绍
## ESLint规范
是商羚前端ESLint规范，目前支持`taro|vue|react`
#### 安装
```shell
npm install @jd/eslint-config-selling -D
# OR
yarn add @jd/eslint-config-selling --dev
```
#### 使用
在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

- **taro**
```js
module.exports = {
  extends: ['@jd/selling/taro'],
};
```

- **vue**
```js
module.exports = {
  extends: ['@jd/selling/vue'],
};
```

- **react**
```js
module.exports = {
  extends: ['@jd/selling/react'],
};
```

#### 规范
见[ESLint规范](../es/rules/common)