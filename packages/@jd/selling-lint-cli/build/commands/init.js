"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStylelint = exports.getQuestions = exports.checkLintInstall = void 0;
// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
const path = require("path");
const handlebars = require("handlebars");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const index_js_1 = require("../lib/index.js");
// 检查是否已初始化最新lint规范
const checkLintInstall = async (targetDir) => {
    // handlebars模版引擎解析用户输入的信息存在package.json
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = handlebars.compile(jsonContent);
    // if (fs.existsSync(targetDir)) {
    //   const answer = await inquirer.prompt({
    //     type: 'list',
    //     name: 'checkExist',
    //     message: `\n仓库路径${targetDir}已存在，请选择`,
    //     choices: ['覆盖', '取消'],
    //   })
    //   if (answer.checkExist === '覆盖') {
    //     warn(`删除${targetDir}...`)
    //     fs.removeSync(targetDir)
    //   } else {
    //     return true
    //   }
    // }
    return false;
};
exports.checkLintInstall = checkLintInstall;
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
const initStylelint = async (targetDir = __dirname) => {
    if (fs.existsSync(`${targetDir}/.stylelintrc.js`)) {
        fs.removeSync(`${targetDir}/.stylelintrc.js`);
    }
    const srcPath = path.join(__dirname, '../lib/templates/.stylelintrc.js');
    const tarPath = path.join(index_js_1.cwd, '.stylelintrc.js');
    (0, index_js_1.copyFile)(srcPath, tarPath);
};
exports.initStylelint = initStylelint;
const action = async (projectName, cmdArgs) => {
    try {
        // const targetDir = path.join(
        //   (cmdArgs && cmdArgs.context) || cwd,
        //   projectName
        // )
        const { targets } = await (0, exports.getQuestions)();
        console.log(targets);
        targets.forEach((target) => {
            switch (target) {
                case 'eslint':
                    break;
                case 'stylelint':
                    (0, exports.initStylelint)();
                    break;
            }
        });
        // await cloneProject(targetDir, projectName, projectInfo)
    }
    catch (err) {
        // failSpinner(err)
        return;
    }
};
exports.default = {
    command: 'init',
    description: '初始化lint规范',
    action,
};
