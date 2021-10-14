"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGeneralRC = exports.updateEslintRC = exports.updateRC = exports.checkAndUpgradeLint = void 0;
// 升级lint版本，三个lint版本一致，默认全部升级到最新，是否允许指定版本待定
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const execa = require("execa");
const index_js_1 = require("../lib/index.js");
const consts_1 = require("../lib/consts");
const eslintType_1 = require("../lib/eslintType");
// 检查并更新包
const checkAndUpgradeLint = async (packageName, targetDir, version = 'latest') => {
    // handlebars模版引擎解析用户输入的信息存在package.json
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
        (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))) {
        execa.commandSync(`npm uninstall ${packageName}`);
    }
    else {
        (0, index_js_1.warn)(`${packageName} does't exist, please use init to install first!`);
        return;
    }
    execa.commandSync(`npm install ${packageName}@${version} --save-dev`);
    (0, exports.updateRC)(packageName, targetDir);
};
exports.checkAndUpgradeLint = checkAndUpgradeLint;
const updateRC = async (packageName, targetDir) => {
    switch (packageName) {
        case consts_1.eslintPackageName:
            (0, exports.updateEslintRC)(targetDir);
            break;
        case consts_1.commitlintPackageName:
            (0, exports.updateGeneralRC)(`../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
            break;
        case consts_1.stylelintPackageName:
            (0, exports.updateGeneralRC)(`../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir);
            break;
    }
};
exports.updateRC = updateRC;
async function requireEslintType() {
    return await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: `cannot autocompile eslint type! please select one:`,
            choices: eslintType_1.eslintType
        }
    ]);
}
const updateEslintRC = async (targetDir) => {
    if (fs.existsSync(`${targetDir}/.eslintrc.js`)) {
        const eslintTypeMap = {
            '@jd/selling/react': 'react',
            '@jd/selling/taro': 'taro',
            '@jd/selling/vue': 'vue'
        };
        const eslintRCContent = fs.readFileSync(`${targetDir}/.eslintrc.js`, 'utf-8');
        const pName = Object.keys(eslintTypeMap).find((item) => {
            return eslintRCContent.indexOf(item) > -1;
        });
        fs.removeSync(`${targetDir}/.eslintrc.js`);
        let eslintType;
        if (pName) {
            eslintType = eslintTypeMap[pName];
        }
        else {
            eslintType = await requireEslintType();
        }
        const srcPath = path.join(__dirname, `../../templates/.eslint-${eslintType}.js`);
        const tarPath = path.join(targetDir, '.eslintrc.js');
        (0, index_js_1.copyFile)(srcPath, tarPath);
    }
    else {
        const eslintType = await requireEslintType();
        const srcPath = path.join(__dirname, `../lib/templates/.eslint-${eslintType}.js`);
        const tarPath = path.join(targetDir, '.eslintrc.js');
        (0, index_js_1.copyFile)(srcPath, tarPath);
    }
};
exports.updateEslintRC = updateEslintRC;
const updateGeneralRC = (srcFileName, targetFileName, targetDir = index_js_1.cwd) => {
    const srcPath = path.join(__dirname, srcFileName);
    const tarPath = path.join(targetDir, targetFileName);
    (0, index_js_1.copyFile)(srcPath, tarPath);
};
exports.updateGeneralRC = updateGeneralRC;
const action = async (projectName, cmdArgs) => {
    try {
        const targetDir = index_js_1.cwd;
        (0, index_js_1.startSpinner)(`upgrading eslint`);
        (0, exports.checkAndUpgradeLint)(consts_1.eslintPackageName, targetDir);
        (0, index_js_1.succeedSpiner)('eslint upgrade successed!');
        (0, index_js_1.startSpinner)(`upgrading commitlint`);
        (0, exports.checkAndUpgradeLint)(consts_1.commitlintPackageName, targetDir);
        (0, index_js_1.succeedSpiner)('commitlint upgrade successed!');
        (0, index_js_1.startSpinner)(`upgrading stylelint`);
        (0, exports.checkAndUpgradeLint)(consts_1.stylelintPackageName, targetDir);
        (0, index_js_1.succeedSpiner)('stylelint upgrade successed!');
        (0, index_js_1.info)(chalk.green('upgrade successed!'));
    }
    catch (err) {
        (0, index_js_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'upgrade',
    description: '升级lint规范',
    action,
};
