"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installHusky = exports.initLint = exports.getQuestions = exports.checkAndRemoveOldPackage = exports.tryToRemovePackage = exports.resolveSafeIndirectDependencies = void 0;
// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
const path = require("path");
const handlebars = require("handlebars");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const execa = require("execa");
const index_js_1 = require("../lib/index.js");
const consts_1 = require("../lib/consts");
const globby = require("globby");
// 仅搜索包含eslint、commitlint、stylelint关键词的依赖包
const resolveSafeIndirectDependencies = (packageName) => {
    function resolveSafeDepList(jsonResult, key) {
        if (jsonResult.hasOwnProperty(key)) {
            return Object.keys(jsonResult[key]).filter((pkg) => {
                return consts_1.safeDependencies.some((sd) => {
                    return pkg.indexOf(sd) > -1;
                });
            });
        }
        return [];
    }
    const jsonPath = path.resolve(__dirname, `../../../${index_js_1.folderName[packageName]}/package.json`);
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    let dependicies = [];
    dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'dependencies'));
    dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'devDependencies'));
    return dependicies;
};
exports.resolveSafeIndirectDependencies = resolveSafeIndirectDependencies;
// 尝试移除当前项目内属于安全依赖列表的包
const tryToRemovePackage = (targetDir = index_js_1.cwd, safeDepList) => {
    let deps = [];
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    if (jsonResult.hasOwnProperty('dependencies')) {
        deps = deps.concat(Object.keys(jsonResult.dependencies));
    }
    if (jsonResult.hasOwnProperty('devDependencies')) {
        deps = deps.concat(Object.keys(jsonResult.devDependencies));
    }
    deps.filter((dep) => {
        return safeDepList.includes(dep);
    }).forEach((dep) => {
        execa.commandSync(`npm uninstall ${dep}`);
    });
};
exports.tryToRemovePackage = tryToRemovePackage;
// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (targetDir, packageName) => {
    const indirectDependicies = (0, exports.resolveSafeIndirectDependencies)(packageName);
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = JSON.parse(jsonContent);
    // 卸载旧版lint包
    if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
        (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))) {
        (0, index_js_1.startSpinner)(`resolving old package: ${packageName}`);
        execa.commandSync(`npm uninstall ${packageName}`);
        (0, index_js_1.succeedSpiner)(`old package: ${packageName} resolved!`);
    }
    // 卸载lint已经包含的间接依赖
    (0, exports.tryToRemovePackage)(targetDir, indirectDependicies);
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
const initLint = (packageName, srcFileName, targetFileName, targetDir = index_js_1.cwd, handlebarParams) => {
    (0, exports.checkAndRemoveOldPackage)(targetDir, packageName);
    if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
        fs.removeSync(`${targetDir}/${targetFileName}`);
    }
    (0, index_js_1.startSpinner)(`adding new package: ${packageName}`);
    execa.commandSync(`npm install ${packageName} --save-dev`);
    if (handlebarParams) {
        const content = fs.readFileSync(`${__dirname}/${srcFileName}`, 'utf-8');
        const contentResult = handlebars.compile(content)(handlebarParams);
        fs.writeFileSync(targetFileName, contentResult);
    }
    else {
        const srcPath = path.join(__dirname, srcFileName);
        const tarPath = path.join(targetDir, targetFileName);
        (0, index_js_1.copyFile)(srcPath, tarPath);
    }
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
            let eslintTypeList = globby.sync(['*.js'], { cwd: path.resolve(__dirname, '../../../eslint-config-selling'), deep: 1 }) || [];
            eslintTypeList = eslintTypeList.filter((type) => {
                return type !== 'base.js' && type !== 'index.js';
            });
            eslintTarget = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: `eslint type:`,
                    choices: eslintTypeList.map((type) => {
                        return type.split('.')[0];
                    })
                }
            ]);
        }
        targets.forEach((target) => {
            switch (target) {
                case 'eslint':
                    (0, index_js_1.startSpinner)('init eslint');
                    (0, exports.initLint)(consts_1.eslintPackageName, `../../templates/.eslintrc.js`, '.eslintrc.js', targetDir, { eslintType: eslintTarget.type });
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
