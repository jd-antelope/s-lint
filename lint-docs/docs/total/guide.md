---
sidebar_position: 1
---
# 介绍
### selling-lint是什么
selling-lint是**一个全面、通用的前端Lint规范解决方案**，
与其他规范方案不同的是，业内流行的方案通常解决某一(JS或Style等)规范，如[eslint-config-airbnb](https://github.com/airbnb/javascript)、[eslint-config-standard](https://github.com/standard/eslint-config-standard)等，而selling-lint是一个规范集合，基本覆盖目前前端技术栈，另一方面，提供轻量的脚手架工具，使用简单

### 特点
- 覆盖全面

    包括前端开发基础规范**ESLint(Vue、React、Taro、Next、Nuxt)、StyleLint(Less、CSS)、CommitLint**
- 使用简单

    提供三大基础包，安装即用；且提供轻量级命令行，一键为项目添加规范、升级规范
- 易于扩展

    Lerna统一版本模式发包，便于基础包升级、扩展自定义paser、plugin等

### 架构图
![image.png](https://storage.360buyimg.com/hawley-common/lint.jpg)
### 基础包
| 包名 | 功能 | jnpm
|  ----  |  ----  | ---
| @jd/eslint-config-selling | 提供eslint规范   | http://npm.jd.com/package/@jd/eslint-config-selling 
| @jd/stylelint-config-selling | 提供stylelint规范 | http://npm.jd.com/package/@jd/stylelint-config-selling
| @jd/commitlint-config-selling | 提供commitlint规范 |http://npm.jd.com/package/@jd/commitlint-config-selling
| @jd/selling-lint-cli | 命令行工具 | http://npm.jd.com/package/@jd/selling-lint-cli

### 使用
> 提供两种使用方式，1、利用脚手架 2、在工程中安装相对的包。推荐方式1


#### 1、使用脚手架
见[CLI介绍](http://lint-doc.selling.local/docs/cli/guide)

#### 2、直接使用
- **ESLint**

    见[ESLint介绍](http://lint-doc.selling.local/docs/es/guide)

- **StyleLint**

    见[StyleLint介绍](http://lint-doc.selling.local/docs/style/guide)

- **CommitLint**

    见[CommitLint介绍](http://lint-doc.selling.local/docs/commit/guide)

### 参与贡献
遇到任何问题，欢迎提交[issue](http://coding.jd.com/selling-front/frontend-lint/issues/)