"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDependencies = exports.folderName = exports.stylelintPackageName = exports.commitlintPackageName = exports.eslintPackageName = exports.targetFile = exports.cwd = void 0;
exports.cwd = process.cwd();
exports.targetFile = 'private';
exports.eslintPackageName = '@jd/eslint-config-selling';
exports.commitlintPackageName = '@jd/commitlint-config-selling';
exports.stylelintPackageName = '@jd/stylelint-config-selling';
exports.folderName = {
    '@jd/eslint-config-selling': 'eslint-config-selling',
    '@jd/commitlint-config-selling': 'commitlint-config-selling',
    '@jd/stylelint-config-selling': 'stylelint-config-selling'
};
exports.safeDependencies = ['eslint', 'commitlint', 'stylelint'];
