"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneProject = exports.copyFile = void 0;
const fs = require("fs-extra");
const execa = require("execa");
const path = require("path");
const handlebars = require("handlebars");
const index_js_1 = require("../lib/index.js");
const copyFile = async (srcPath, tarPath, cb) => {
    const rs = fs.createReadStream(srcPath);
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath, err);
        }
    });
    var ws = fs.createWriteStream(tarPath);
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath);
        }
    });
    ws.on('close', function (ex) {
        cb();
    });
    rs.pipe(ws);
};
exports.copyFile = copyFile;
const cloneProject = async (targetDir, projectName, projectInfo) => {
    // startSpinner(`开始创建私服仓库 ${chalk.cyan(targetDir)}`)
    // 复制'private-server-boilerplate'到目标路径下创建工程
    await fs.copy(path.join(__dirname, '..', '..', 'private-server-boilerplate'), targetDir);
    // handlebars模版引擎解析用户输入的信息存在package.json
    const jsonPath = `${targetDir}/package.json`;
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const jsonResult = handlebars.compile(jsonContent)(projectInfo);
    fs.writeFileSync(jsonPath, jsonResult);
    // 新建工程装包
    execa.commandSync('npm install', {
        stdio: 'inherit',
        cwd: targetDir,
    });
    // succeedSpiner(
    //   `私服仓库创建完成 ${chalk.yellow(projectName)}\n👉 输入以下命令开启私服:`
    // )
    (0, index_js_1.info)(`$ cd ${projectName}\n$ sh start.sh\n`);
};
exports.cloneProject = cloneProject;
