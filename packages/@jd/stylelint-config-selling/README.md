# @jd/stylelint-config-selling
> `@jd/stylelint-config-selling`是商羚前端stylelint规范，支持`css|less|sass|wxss`
## 安装

```shell
npm install @jd/stylelint-config-selling -D
```
或者
```shell
yarn add @jd/stylelint-config-selling --dev
```
目前只支持内网使用，如果引入不了，如下操作
```shell
npm install -g nrm --registry=http://registry.m.jd.com
nrm use jd
```

## 使用
在你的项目根目录下创建一个`.stylelintrc.js`配置文件

- 如果你使用的是`css|less`，配置如下:
    ```js
    module.exports = {
    "extends": "@jd/stylelint-config-selling"
    }
    ```

- 如果你使用的是`sass`，配置如下:
    ```js
    module.exports = {
    "extends": "@jd/stylelint-config-selling/scss"
    }
    ```

- 如果你使用的是`wxss`，配置如下:
    ```js
    module.exports = {
    "extends": "@jd/stylelint-config-selling/wxss"
    }
    ```

## LICENSE

MIT
