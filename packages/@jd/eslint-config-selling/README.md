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
:::caution
如果项目之前安装过ESLint相关的包，建议卸载，避免引入不必要的包。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin`  、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、`eslint-config-react-app`、
`eslint-plugin-import`等，直接在package.json搜索**eslint**，相关的包全部卸载
:::
#### 规范
见[ESLint规范](../es/rules/common)