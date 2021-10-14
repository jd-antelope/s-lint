"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSpinner = exports.succeedSpiner = exports.startSpinner = exports.spinner = void 0;
const ora = require("ora");
const chalk = require("chalk");
exports.spinner = ora();
const startSpinner = (text) => {
    const msg = `${text}...\n`;
    exports.spinner.start(msg);
    // spinner.stopAndPersist({
    //   symbol: '✨',
    //   text: msg,
    // })
};
exports.startSpinner = startSpinner;
const succeedSpiner = (text) => {
    exports.spinner.stopAndPersist({
        symbol: '🎉',
        text: text
    });
};
exports.succeedSpiner = succeedSpiner;
const failSpinner = (text) => {
    exports.spinner.stopAndPersist();
    exports.spinner.fail(chalk.red(text));
};
exports.failSpinner = failSpinner;
