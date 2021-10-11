"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLint = exports.installHusky = exports.checkAndRemoveOldPackage = void 0;
// commit的pre-commit检查
const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const execa = require("execa");
const index_js_1 = require("../lib/index.js");
const consts_1 = require("../lib/consts");
// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (targetDir, packageName) => {
    // handlebars模版引擎解析用户输入的信息存在package.json
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
        (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))) {
        execa.commandSync(`npm uninstall ${packageName}`);
    }
};
exports.checkAndRemoveOldPackage = checkAndRemoveOldPackage;
const installHusky = (targetDir) => {
    if (!(0, index_js_1.hasPackage)('husky', targetDir)) {
        execa.commandSync(`npm install husky --save-dev`);
    }
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    jsonResult.husky = {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    };
    fs.writeFileSync(jsonPath, JSON.stringify(jsonResult, null, 2), 'utf8');
};
exports.installHusky = installHusky;
const initLint = (packageName, srcFileName, targetFileName, targetDir = index_js_1.cwd) => {
    (0, exports.checkAndRemoveOldPackage)(targetDir, packageName);
    if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
        fs.removeSync(`${targetDir}/${targetFileName}`);
    }
    execa.commandSync(`npm install ${packageName} --save-dev`);
    const srcPath = path.join(__dirname, srcFileName);
    const tarPath = path.join(targetDir, targetFileName);
    (0, index_js_1.copyFile)(srcPath, tarPath);
};
exports.initLint = initLint;
const action = async (projectName, cmdArgs) => {
    try {
        const targetDir = index_js_1.cwd;
        (0, index_js_1.startSpinner)(`installing husky`);
        (0, exports.installHusky)(targetDir);
        (0, index_js_1.succeedSpiner)('husky installed!');
        (0, index_js_1.startSpinner)(`init commitlint`);
        (0, exports.initLint)(consts_1.commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
        (0, index_js_1.succeedSpiner)(chalk.green('init git-hooks successed!'));
    }
    catch (err) {
        (0, index_js_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'init-git-hooks',
    description: '初始化git-hooks规范',
    action,
};
