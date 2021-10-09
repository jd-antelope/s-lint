#!/usr/bin/env node  
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globby = require("globby");
const commander = require("commander");
const index_js_1 = require("./lib/index.js");
const { program } = commander;
let commandsPath = [];
// 获取命令
const getCommand = () => {
    commandsPath =
        globby.sync('./commands/*.*s', { cwd: __dirname, deep: 1 }) || [];
    return commandsPath;
};
function start() {
    const commandsPath = getCommand();
    program.version('0.0.1');
    commandsPath.forEach((commandPath) => {
        const commandObj = require(`./${commandPath}`);
        const { command, description, optionList, action } = commandObj.default;
        const options = optionList &&
            optionList.map((option) => {
                return `.option(${option[0]},${option[1]})`;
            });
        // console.log(options)
        const curp = program
            .command(command)
            .description(description)
            .action(action);
        optionList &&
            optionList.map((option) => {
                curp.option(...option);
            });
    });
    program.arguments('[command]').action((cmd) => {
        if (!cmd) {
            program.outputHelp();
            return;
        }
        (0, index_js_1.error)(`未知的命令${cmd}`);
        program.outputHelp();
    });
    program.parseAsync(process.argv);
}
start();
