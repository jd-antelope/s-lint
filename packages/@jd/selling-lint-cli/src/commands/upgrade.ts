// 升级lint版本，三个lint版本一致，默认全部升级到最新，是否允许指定版本待定
import * as path from 'path'
import * as inquirer from 'inquirer'
import * as handlebars from 'handlebars'
import * as chalk from 'chalk'
import * as fs from 'fs-extra'
import * as execa from 'execa'
import * as pacote from 'pacote'
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
  stylelintPackageName,
  packageMap,
  VERSION_ENUM
} from '../lib/consts'
import { PackageJson } from '../lib/type'
import { eslintType as eslintTypeList } from '../lib/eslintType' 

export const checkVersion = async (packageName: string, targetDir: string, targetVersion) => {
  const manifest = await pacote.manifest(`@jd/selling-lint-cli@${targetVersion || 'latest'}`, {registry: 'http://registry.m.jd.com/'})
  const resultVersion = manifest.version
  let currentVersion = ''

  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)

  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName))) {
    currentVersion = jsonResult.dependencies[packageName]
  } else if ((jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))) {
    currentVersion = jsonResult.devDependencies[packageName]
  }

  return {
    currentVersion,
    resultVersion
  }
}

// 检查并更新包
export const checkAndUpgradeLint = async (packageName: string, targetDir: string, version = 'latest') => {
  const versionResult = await checkVersion(packageName, targetDir, version)
  const currentVersion = versionResult.currentVersion && versionResult.currentVersion.replace(/[\^~]/, '')
  const versionStatus = !currentVersion ? VERSION_ENUM.UNINSTALLED
    // 当前目录的package.json可能带^或~等
    : currentVersion.indexOf(versionResult.resultVersion) > -1 ? VERSION_ENUM.NEW : VERSION_ENUM.OLD

  switch (versionStatus) {
    case VERSION_ENUM.UNINSTALLED:
      info(`${packageName} 暂未安装，请先执行 s-lint init 进行初始化!`)
      return
    case VERSION_ENUM.NEW:
      info(`${packageName} 当前已是最新版本!`)
      return
    case VERSION_ENUM.OLD:
      startSpinner(`正在升级${packageMap.lintType[packageName]}`)
      execa.commandSync(`npm install ${packageName}@${version} --save-dev`, {stdio: 'inherit'})
      await updateRC(packageName, targetDir);
      succeedSpiner(`${packageMap.lintType[packageName]}升级成功（${chalk.green(currentVersion)} ${chalk.green('->')} ${chalk.green(versionResult.resultVersion)}）!`)
      break;
  }
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
    const eslintRCContent = require(`${targetDir}/.eslintrc.js`); // fs.readFileSync(`${targetDir}/.eslintrc.js`, 'utf-8')
    const keyword = eslintRCContent && eslintRCContent.extends;
    const pName = keyword && eslintTypeList.find((item) => {
      return keyword.indexOf('@jd/selling/' + item) > -1
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

    await checkAndUpgradeLint(eslintPackageName, targetDir);
    await checkAndUpgradeLint(commitlintPackageName, targetDir);
    await checkAndUpgradeLint(stylelintPackageName, targetDir);

    info(chalk.green('执行成功!'))

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