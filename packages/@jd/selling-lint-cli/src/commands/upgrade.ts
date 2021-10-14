// 升级lint版本，三个lint版本一致，默认全部升级到最新，是否允许指定版本待定
import * as path from 'path'
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
} from '../lib/index.js'
import {
  eslintPackageName,
  commitlintPackageName,
  stylelintPackageName
} from '../lib/consts'
import { PackageJson } from '../lib/type'
import { eslintType } from '../lib/eslintType' 

// 检查并更新包
export const checkAndUpgradeLint = async (packageName: string, targetDir: string, version = 'latest') => {
  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
  ) {
    execa.commandSync(`npm uninstall ${packageName}`)
  } else {
    warn(`${packageName} does't exist, please use init to install first!`)
    return
  }

  execa.commandSync(`npm install ${packageName}@${version} --save-dev`)
  updateRC(packageName, targetDir);
}

export const updateRC = async (packageName: string, targetDir: string) => {
  switch (packageName) {
    case eslintPackageName:
      updateEslintRC(targetDir)
      break
    case commitlintPackageName:
      updateGeneralRC(`../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir)
      break
    case stylelintPackageName:
      updateGeneralRC(`../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir)
      break
  }
}

async function requireEslintType () {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: `cannot autocompile eslint type! please select one:`,
      choices: eslintType
    }
  ])
}

export const updateEslintRC = async (targetDir: string) => {
  if (fs.existsSync(`${targetDir}/.eslintrc.js`)) {
    const eslintTypeMap = {
      '@jd/selling/react': 'react',
      '@jd/selling/taro': 'taro',
      '@jd/selling/vue': 'vue'
    }
    const eslintRCContent = fs.readFileSync(`${targetDir}/.eslintrc.js`, 'utf-8')
    const pName = Object.keys(eslintTypeMap).find((item) => {
      return eslintRCContent.indexOf(item) > -1
    })

    fs.removeSync(`${targetDir}/.eslintrc.js`)
    let eslintType;

    if (pName) {
      eslintType = eslintTypeMap[pName]
    } else {
      eslintType = await requireEslintType()
    }

    const srcPath = path.join(__dirname, `../../templates/.eslint-${eslintType}.js`)
    const tarPath = path.join(targetDir, '.eslintrc.js')

    copyFile(srcPath, tarPath)
  } else {
    const eslintType = await requireEslintType()
    const srcPath = path.join(__dirname, `../lib/templates/.eslint-${eslintType}.js`)
    const tarPath = path.join(targetDir, '.eslintrc.js')

    copyFile(srcPath, tarPath)
  }
}

export const updateGeneralRC = (srcFileName: string, targetFileName: string, targetDir = cwd) => {
  const srcPath = path.join(__dirname, srcFileName)
  const tarPath = path.join(targetDir, targetFileName)

  copyFile(srcPath, tarPath)
}

const action = async (projectName, cmdArgs) => {
  try {
    const targetDir = cwd
    startSpinner(`upgrading eslint`)
    checkAndUpgradeLint(eslintPackageName, targetDir);
    succeedSpiner('eslint upgrade successed!')

    startSpinner(`upgrading commitlint`)
    checkAndUpgradeLint(commitlintPackageName, targetDir);
    succeedSpiner('commitlint upgrade successed!')

    startSpinner(`upgrading stylelint`)
    checkAndUpgradeLint(stylelintPackageName, targetDir);
    succeedSpiner('stylelint upgrade successed!')
    info(chalk.green('upgrade successed!'))

  } catch (err) {
    failSpinner(err)
    return
  }
}

export default {
  command: 'upgrade',
  description: '升级lint规范',
  action,
}