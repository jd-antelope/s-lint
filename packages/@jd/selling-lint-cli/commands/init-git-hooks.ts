// commit的pre-commit检查
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
  hasPackage
} from '../lib/index.js'
import {
  commitlintPackageName,
} from '../lib/consts'
import { PackageJson } from '../lib/type'


// 检查并移除旧的lint包
export const checkAndRemoveOldPackage = async (targetDir: string, packageName: string) => {
  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
  ) {
    startSpinner(`resolving old package: ${packageName}`)
    execa.commandSync(`npm uninstall ${ packageName }`)
    succeedSpiner(`old package: ${packageName} resolved!`)
  }
}

export const installHusky = (targetDir: string) => {
  if (!hasPackage('husky', targetDir)) {
    execa.commandSync(`npm install husky --save-dev`)
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

export const initLint = (packageName: string, srcFileName: string, targetFileName: string, targetDir = cwd) => {
  checkAndRemoveOldPackage(targetDir, packageName)

  if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
    fs.removeSync(`${targetDir}/${targetFileName}`)
  }

  execa.commandSync(`npm install ${ packageName } --save-dev`)

  const srcPath = path.join(__dirname, srcFileName)
  const tarPath = path.join(targetDir, targetFileName)

  copyFile(srcPath, tarPath)
}

const action = async (projectName, cmdArgs) => {
  try {
    const targetDir = cwd

    startSpinner(`installing husky`)
    installHusky(targetDir)
    succeedSpiner('husky installed!')

    startSpinner(`init commitlint`)
    initLint(commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
    succeedSpiner(chalk.green('init git-hooks successed!'))
  } catch (err) {
    failSpinner(err)
    return
  }
}

export default {
  command: 'init-git-hooks',
  description: '初始化git-hooks规范',
  action,
}