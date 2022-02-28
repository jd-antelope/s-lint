// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
import * as path from 'path'
import * as handlebars from 'handlebars'
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'
import * as fs from 'fs-extra'
import * as execa from 'execa'
import {
  cwd,
  copyFile,
  readPackageJson,
  startSpinner,
  succeedSpiner,
  failSpinner,
  warn,
  info,
  hasPackage,
  packageMap
} from '../lib/index.js'
import {
  eslintPackageName,
  commitlintPackageName,
  stylelintPackageName,
  safeDependencies
} from '../lib/consts'

import * as allDeps from '../lib/safeDeps'
import { eslintType } from '../lib/eslintType' 

import { PackageJson } from '../lib/type'

// 尝试移除当前项目内属于安全依赖列表的包
export const tryToRemovePackage = (targetDir = cwd, safeDepList: Array<string>) => {
  let deps = []

  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)

  if (jsonResult.hasOwnProperty('dependencies')) {
    deps = deps.concat(Object.keys(jsonResult.dependencies))
  }

  if (jsonResult.hasOwnProperty('devDependencies')) {
    deps = deps.concat(Object.keys(jsonResult.devDependencies))
  }

  deps.filter((dep) => {
    return safeDepList.includes(dep)
  }).forEach((dep) => {
    execa.commandSync(`npm uninstall ${dep}`, {stdio: 'inherit'})
  })
}

// 检查并移除旧的lint包
export const checkAndRemoveOldPackage = async (targetDir: string, packageName: string) => {
  const indirectDependicies = allDeps[packageMap.depsName[packageName]]

  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  // 卸载旧版lint包
  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
  ) {
    // startSpinner(`resolving old package: ${packageName}`)
    execa.commandSync(`npm uninstall ${ packageName }`, {stdio: 'inherit'})
    // succeedSpiner(`old package: ${packageName} resolved!`)
  }

  // 卸载lint已经包含的间接依赖
  tryToRemovePackage(targetDir, indirectDependicies)
}

export const getQuestions = async () => {
  return await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'targets',
      message: `请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):`,
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
  ])
}

export const initLint = (packageName: string, srcFileName: string, targetFileName: string, targetDir = cwd, handlebarParams?: Object) => {
  checkAndRemoveOldPackage(targetDir, packageName)

  if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
    fs.removeSync(`${targetDir}/${targetFileName}`)
  }

  startSpinner(`正在安装依赖: ${packageName}`)
  execa.commandSync(`npm install ${ packageName } --save-dev`, {stdio: 'inherit'})
  succeedSpiner(`${packageName}安装完成`)
  if (handlebarParams) {
    const content = fs.readFileSync(`${__dirname}/${srcFileName}`, 'utf-8')
    const contentResult = handlebars.compile(content)(handlebarParams)
    fs.writeFileSync(targetFileName, contentResult)
  } else {
    const srcPath = path.join(__dirname, srcFileName)
    const tarPath = path.join(targetDir, targetFileName)

    copyFile(srcPath, tarPath)
  }
}

export const installHusky = (targetDir: string) => {
  // startSpinner(`installing husky`)
  if (!hasPackage('husky', targetDir)) {
    execa.commandSync(`npm install husky --save-dev`, {stdio: 'inherit'})
  }

  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = JSON.parse(jsonContent)
  jsonResult.husky = {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
  fs.writeFileSync(jsonPath, JSON.stringify(jsonResult, null, 2), 'utf8')
}

export const addLintStaged = (targetDir: string, config: Object) => {
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = JSON.parse(jsonContent)
  jsonResult['lint-staged'] = Object.assign(jsonResult['lint-staged'] || {}, config)
  fs.writeFileSync(jsonPath, JSON.stringify(jsonResult, null, 2), 'utf8')
}

export const addFile = (targetDir: string, filename: string, content: string) => {
  fs.writeFileSync(`${targetDir}/${filename}`, content, 'utf8')
}

const action = async (projectName, cmdArgs) => {
  try {
    const targetDir = cwd
    const { targets } = await getQuestions()
    let eslintTarget = { type: '' }
    if (targets.includes('eslint')) {
      eslintTarget = await inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: `请选择eslint规范类型:`,
          choices: eslintType
        }
      ])
    }
    targets.forEach((target: string) => {
      switch (target) {
        case 'eslint':
          startSpinner('开始初始化eslint')
          addLintStaged(targetDir, {
            "*.{js,jsx,json,ts,tsx,vue}": [
              "eslint --fix",
              "git add"
            ]
          })
          addFile(targetDir, '.eslintignore', '.eslintrc.js') // 解决.eslintrc.js报错
          initLint(eslintPackageName, `../../templates/.eslintrc.js`, '.eslintrc.js', targetDir, { eslintType: eslintTarget.type });
          succeedSpiner(chalk.green('eslint初始化成功!'))
          break;
        case 'stylelint':
          startSpinner(`开始初始化stylelint`)
          addLintStaged(targetDir, {
            "src/**/*.less": [
              "stylelint --config  ./.stylelintrc --fix",
              "git add"
            ]
          })
          initLint(stylelintPackageName, `../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir);
          succeedSpiner(chalk.green('stylelint初始化成功!'))
          break;
        case 'commitlint':
          startSpinner(`开始初始化commitlint`)
          installHusky(targetDir)
          initLint(commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
          succeedSpiner(chalk.green('commitlint初始化成功!'))
          break;
      }
    })
    info(chalk.green('初始化成功!'))

  } catch (err) {
    failSpinner(err)
    return
  }
}

export default {
  command: 'init',
  description: '初始化lint规范',
  action,
}