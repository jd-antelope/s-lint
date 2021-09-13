# 商羚前端eslint安装
`eslint-config-selling`是商羚前端eslint规范，目前支持`taro/vue/react`。使用如下
```js
npm install --save-dev @jd/eslint-config-selling-c
```
或者
```js
yarn add @jd/eslint-config-selling-c --dev
```
目前只支持jd内网使用，如果引入不了，如下操作
```js
npm install -g nrm --registry=http://registry.m.jd.com
nrm use jd
```
## taro使用
在`.eslintrc.js`文件中调用
```js
module.exports = {
  extends: ['@jd/selling/taro'],
};
```
## vue使用
在`.eslintrc.js`文件中调用
```js
module.exports = {
  extends: ['@jd/selling/vue'],
};
```
## react使用
在`.eslintrc.js`文件中调用
```js
module.exports = {
  extends: ['@jd/selling/react'],
};
```
