// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
import * as path from 'path'
import * as handlebars from 'handlebars'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
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
} from '../lib/index.js.js'
import {
  eslintPackageName,
  commitlintPackageName,
  stylelintPackageName
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
    execa.commandSync(`npm uninstall ${ packageName }`)
  }
}

export const getQuestions = async () => {
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
  ])
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
    const { targets } = await getQuestions()
    let eslintType = ''
    if (targets.includes('eslint')) {
      eslintType = await inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: `eslint type:`,
          choices: [
            {
              name: 'taro'
            }, {
              name: 'react'
            }, {
              name: 'vue'
            }
          ]
        }
      ])
    }
    targets.forEach((target: string) => {
      switch (target) {
        case 'eslint':
          initLint(eslintPackageName, `../../templates/.eslint-${eslintType}.js`, '.eslintrc.js', targetDir);
          break;
        case 'stylelint':
          initLint(stylelintPackageName, `../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir);
          break;
        case 'commitlint':
          initLint(commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
          break;
      }
    })

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