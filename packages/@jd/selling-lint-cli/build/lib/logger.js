"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.info = exports.warn = void 0;
const chalk = require("chalk");
const warn = (text) => {
    console.log(chalk.yellow(`\n${text}\n`));
};
exports.warn = warn;
const info = (text) => {
    console.log(chalk.cyan(`\n${text}\n`));
};
exports.info = info;
const error = (text) => {
    console.log(chalk.bgRed(`\n${text}\n`));
};
exports.error = error;
