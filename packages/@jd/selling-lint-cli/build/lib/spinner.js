"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSpinner = exports.succeedSpiner = exports.startSpinner = void 0;
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora();
const startSpinner = (text) => {
    const msg = `${text}...\n`;
    spinner.start(msg);
    spinner.stopAndPersist({
        symbol: '✨',
        text: msg,
    });
};
exports.startSpinner = startSpinner;
const succeedSpiner = (text) => {
    spinner.stopAndPersist({
        symbol: '🎉',
        text: `${text}\n`
    });
};
exports.succeedSpiner = succeedSpiner;
const failSpinner = (text) => {
    spinner.fail(chalk.red(text));
};
exports.failSpinner = failSpinner;
