先使用下列任一命令安装脚手架
```shell
npm install -g @jd/selling-lint-cli
# OR
yarn global add @jd/selling-lint-cli
```
安装之后，你就可以在命令行中访问`s-lint`命令。你可以通过简单运行`s-lint`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：
```shell
s-lint --version
```
如需升级全局的@jd/selling-lint-cli包，请运行：

```shell
npm upgrade -g @jd/selling-lint-cli
# OR
yarn global upgrade --latest @jd/selling-lint-cli
```
### init命令
在工程路径下，运行以下命令来为工程加上lint规范
```shell
s-lint init
```
随后命令行会列举可选的规范类型，目前包括eslint、stylelint及commitlint，默认全选，使用上下键切换目标选项，空格键可切换选中态，回车确认。

![image.png](https://storage.360buyimg.com/hawley-common/init.jpg)

如果选择的规范包含eslint，则会继续询问要初始化的eslint类型，如vue、react、taro等，该选项为单选，选择完毕后将开始进行初始化。

![image.png](https://storage.360buyimg.com/hawley-common/eslintType.jpg)

cli将按照所选的规范类型依次进行初始化，单个规范的初始化过程包括
1. 检查并移除旧包，包括项目内的冗余依赖
2. 检查并移除旧[xxx]rc.js文件
3. 安装目标规范的依赖
4. 添加对应的rc文件，如.eslintrc.js、.stylelintrc.js等

对于commitlint规范，cli还会额外安装husky依赖，并在package.json中增加husky配置。期间命令行将提示当前的大致进度。

### init-git-hooks命令
在工程路径下，运行以下命令可单独初始化commitlint规范
```shell
s-lint init-git-hooks
```

### upgrade命令
在工程路径下，运行以下命令可升级lint规范，目前暂不支持升级单个lint规范，仅支持升级到规范的最新版本
```shell
s-lint upgrade
```
cli会依次尝试对三个规范进行升级，单个规范的升级过程如下：
1. 检查是否安装了当前规范以及当前是否为最新版本，如果是则直接跳过后续步骤
2. 安装最新lint规范
3. 更新rc文件

更新rc文件时，如果是commitlint或stylelint规范，直接复制最新的模板文件到工程根路径下即可；如果是eslint规范，则先扫描原rc文件，判断eslint类型，再进行模板替换，如果扫描失败，则再次询问要升级的eslint类型。

cli所支持的eslint类型和lint的相关安全依赖分别保存在scripts/eslintType.js和scripts/safeDeps.js中，文件的内容分别由npm run scan-eslint-type和npm run scan-deps命令自动扫描生成，无需手动维护。这两个命令已添加到npm run build操作流中，因此只需执行build命令即可。