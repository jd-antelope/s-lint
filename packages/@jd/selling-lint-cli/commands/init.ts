// 初始化eslint、stylelint、commitLint、三个lint（默认），对于eslint需要对版本类型询问（react、vue）
// 包冲突时需要先移除旧包
import * as path from 'path'
import * as handlebars from 'handlebars'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import * as fs from 'fs-extra'
import {
  cwd,
  copyFile,
  // startSpinner,
  // succeedSpiner,
  // failSpinner,
  warn,
  info,
} from '../lib/index.js'
import { tar } from 'compressing'

// 检查是否已初始化最新lint规范
export const checkLintInstall = async (targetDir) => {
  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = handlebars.compile(jsonContent)

  // if (fs.existsSync(targetDir)) {
  //   const answer = await inquirer.prompt({
  //     type: 'list',
  //     name: 'checkExist',
  //     message: `\n仓库路径${targetDir}已存在，请选择`,
  //     choices: ['覆盖', '取消'],
  //   })
  //   if (answer.checkExist === '覆盖') {
  //     warn(`删除${targetDir}...`)
  //     fs.removeSync(targetDir)
  //   } else {
  //     return true
  //   }
  // }
  return false
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

export const initStylelint = async (targetDir = __dirname) => {
  if (fs.existsSync(`${targetDir}/.stylelintrc.js`)) {
    fs.removeSync(`${targetDir}/.stylelintrc.js`)
  }

  const srcPath = path.join(__dirname, '../lib/templates/.stylelintrc.js')
  const tarPath = path.join(cwd, '.stylelintrc.js')

  copyFile(srcPath, tarPath)
}

const action = async (projectName, cmdArgs) => {
  try {
    // const targetDir = path.join(
    //   (cmdArgs && cmdArgs.context) || cwd,
    //   projectName
    // )
    const { targets } = await getQuestions()
    console.log(targets)
    targets.forEach((target: string) => {
      switch (target) {
        case 'eslint':
          break;
        case 'stylelint':
          initStylelint();
          break;
      }
    })

    // await cloneProject(targetDir, projectName, projectInfo)
  } catch (err) {
    // failSpinner(err)
    return
  }
}

export default {
  command: 'init',
  description: '初始化lint规范',
  action,
}