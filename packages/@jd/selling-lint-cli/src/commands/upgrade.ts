// 升级lint版本，三个lint版本一致，默认全部升级到最新，是否允许指定版本待定
import * as path from 'path'
import * as inquirer from 'inquirer'
import * as handlebars from 'handlebars'
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
import { eslintType as eslintTypeList } from '../lib/eslintType' 

// 检查并更新包
export const checkAndUpgradeLint = async (packageName: string, targetDir: string, version = 'latest') => {
  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
  ) {
    execa.commandSync(`npm uninstall ${packageName}`, {stdio: 'inherit'})
  } else {
    info(`${packageName} 暂未安装，已跳过!`)
    return
  }

  execa.commandSync(`npm install ${packageName}@${version} --save-dev`, {stdio: 'inherit'})
  await updateRC(packageName, targetDir);
}

export const updateRC = async (packageName: string, targetDir: string) => {
  switch (packageName) {
    case eslintPackageName:
      await updateEslintRC(targetDir)
      break
    case commitlintPackageName:
      updateGeneralRC(`../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir)
      break
    case stylelintPackageName:
      updateGeneralRC(`../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir)
      break
  }
}

const requireEslintType = async () => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: `自动查询eslint类型失败，请重新选择:`,
      choices: eslintTypeList
    }
  ])
}

export const updateEslintRC = async (targetDir: string) => {
  if (fs.existsSync(`${targetDir}/.eslintrc.js`)) {
    const eslintRCContent = fs.readFileSync(`${targetDir}/.eslintrc.js`, 'utf-8')
    const pName = eslintTypeList.find((item) => {
      return eslintRCContent.indexOf(item) > -1
    })

    fs.removeSync(`${targetDir}/.eslintrc.js`)
    let eslintType;

    if (pName) {
      eslintType = pName
    } else {
      const eslintTypeTarget = await requireEslintType()
      eslintType = eslintTypeTarget.type
    }

    const content = fs.readFileSync(`${__dirname}/../../templates/.eslintrc.js`, 'utf-8')
    const tarPath = path.join(targetDir, '.eslintrc.js')

    const contentResult = handlebars.compile(content)({ eslintType: eslintType })
    fs.writeFileSync(tarPath, contentResult)
  } else {
    const eslintTypeTarget = await requireEslintType()
    const eslintType = eslintTypeTarget.type
    const content = fs.readFileSync(`${__dirname}/../../templates/.eslintrc.js`, 'utf-8')
    const tarPath = path.join(targetDir, '.eslintrc.js')

    const contentResult = handlebars.compile(content)({ eslintType: eslintType })
    fs.writeFileSync(tarPath, contentResult)
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
    startSpinner(`正在升级eslint`)
    await checkAndUpgradeLint(eslintPackageName, targetDir);
    succeedSpiner('eslint升级成功!')

    startSpinner(`正在升级commitlint`)
    checkAndUpgradeLint(commitlintPackageName, targetDir);
    succeedSpiner('commitlint升级成功!')

    startSpinner(`正在升级stylelint`)
    checkAndUpgradeLint(stylelintPackageName, targetDir);
    succeedSpiner('stylelint升级成功!')
    info(chalk.green('lint升级成功!'))

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