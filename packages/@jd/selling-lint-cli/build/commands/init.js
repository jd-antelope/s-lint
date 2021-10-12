"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installHusky = exports.initLint = exports.getQuestions = exports.checkAndRemoveOldPackage = void 0;
// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
const path = require("path");
const inquirer = require("inquirer");
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
        (0, index_js_1.startSpinner)(`resolving old package: ${packageName}`);
        execa.commandSync(`npm uninstall ${packageName}`);
        (0, index_js_1.succeedSpiner)(`old package: ${packageName} resolved!`);
    }
};
exports.checkAndRemoveOldPackage = checkAndRemoveOldPackage;
const getQuestions = async () => {
    return await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'targets',
            message: `select one or more to init (default all):`,
            choices: [
                {
                    name: 'eslint',
                    checked: true
                }, {
                    name: 'stylelint',
                    checked: true
                }, {
                    name: 'commitlint',
                    checked: true
                }
            ]
        }
    ]);
};
exports.getQuestions = getQuestions;
const initLint = (packageName, srcFileName, targetFileName, targetDir = index_js_1.cwd) => {
    (0, exports.checkAndRemoveOldPackage)(targetDir, packageName);
    if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
        fs.removeSync(`${targetDir}/${targetFileName}`);
    }
    (0, index_js_1.startSpinner)(`adding new package: ${packageName}`);
    execa.commandSync(`npm install ${packageName} --save-dev`);
    const srcPath = path.join(__dirname, srcFileName);
    const tarPath = path.join(targetDir, targetFileName);
    (0, index_js_1.copyFile)(srcPath, tarPath);
};
exports.initLint = initLint;
const installHusky = (targetDir) => {
    (0, index_js_1.startSpinner)(`installing husky`);
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
const action = async (projectName, cmdArgs) => {
    try {
        const targetDir = index_js_1.cwd;
        const { targets } = await (0, exports.getQuestions)();
        let eslintTarget = { type: '' };
        if (targets.includes('eslint')) {
            eslintTarget = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: `eslint type:`,
                    choices: [
                        {
                            name: 'taro'
                        }, {
                            name: 'react'
                        }, {
                            name: 'vue'
                        }
                    ]
                }
            ]);
        }
        targets.forEach((target) => {
            switch (target) {
                case 'eslint':
                    (0, index_js_1.startSpinner)('init eslint');
                    (0, exports.initLint)(consts_1.eslintPackageName, `../../templates/.eslint-${eslintTarget.type}.js`, '.eslintrc.js', targetDir);
                    (0, index_js_1.succeedSpiner)('eslint init successed!');
                    break;
                case 'stylelint':
                    (0, index_js_1.startSpinner)(`init stylelint`);
                    (0, exports.initLint)(consts_1.stylelintPackageName, `../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir);
                    (0, index_js_1.succeedSpiner)('stylelint init successed!');
                    break;
                case 'commitlint':
                    (0, index_js_1.startSpinner)(`init commitlint`);
                    (0, exports.installHusky)(targetDir);
                    (0, exports.initLint)(consts_1.commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
                    (0, index_js_1.succeedSpiner)('commitlint init successed!');
                    break;
            }
        });
        (0, index_js_1.info)(chalk.green('init successed!'));
    }
    catch (err) {
        (0, index_js_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'init',
    description: '初始化lint规范',
    action,
};
