---
sidebar_position: 1
---
# 介绍
先使用下列任一命令安装脚手架
```shell
npm install -g @jd/selling-lint-cli
# OR
yarn global add @jd/selling-lint-cli
```
安装之后，你就可以在命令行中访问`selling-lint`命令。你可以通过简单运行`selling-lint`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：
```shell
selling-lint --version
```
如需升级全局的@jd/selling-lint-cli包，请运行：

```shell
npm update -g @jd/selling-lint-cli
# OR
yarn global upgrade --latest @jd/selling-lint-cli
```
在工程路径下，运行以下命令来为工程加上lint规范
```shell
selling-lint init
```
// TODO 待补充步骤、截图