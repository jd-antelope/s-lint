"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDependencies = exports.packageMap = exports.stylelintPackageName = exports.commitlintPackageName = exports.eslintPackageName = exports.targetFile = exports.cwd = void 0;
exports.cwd = process.cwd();
exports.targetFile = 'private';
exports.eslintPackageName = '@jd/eslint-config-selling';
exports.commitlintPackageName = '@jd/commitlint-config-selling';
exports.stylelintPackageName = '@jd/stylelint-config-selling';
exports.packageMap = {
    folderName: {
        '@jd/eslint-config-selling': 'eslint-config-selling',
        '@jd/commitlint-config-selling': 'commitlint-config-selling',
        '@jd/stylelint-config-selling': 'stylelint-config-selling'
    },
    lintType: {
        '@jd/eslint-config-selling': 'eslint',
        '@jd/commitlint-config-selling': 'commitlint',
        '@jd/stylelint-config-selling': 'stylelint'
    },
    depsName: {
        '@jd/eslint-config-selling': 'eslintDeps',
        '@jd/commitlint-config-selling': 'commitlintDeps',
        '@jd/stylelint-config-selling': 'stylelintDeps'
    }
};
exports.safeDependencies = ['eslint', 'commitlint', 'stylelint'];
