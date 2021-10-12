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
  spinner,
  warn,
  info,
  hasPackage,
  folderName
} from '../lib/index.js'
import {
  eslintPackageName,
  commitlintPackageName,
  stylelintPackageName,
  safeDependencies
} from '../lib/consts'
import { PackageJson } from '../lib/type'
import * as globby from 'globby'

// 仅搜索包含eslint、commitlint、stylelint关键词的依赖包
export const resolveSafeIndirectDependencies = (packageName: string) => {
  function resolveSafeDepList (jsonResult: Object, key: string) {
    if (jsonResult.hasOwnProperty(key)) {
      return Object.keys(jsonResult[key]).filter((pkg: string) => {
        return safeDependencies.some((sd: string) => {
          return pkg.indexOf(sd) > -1
        })
      })
    }

    return []
  }
  const jsonPath = path.resolve(__dirname, `../../../${folderName[packageName]}/package.json`)
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)

  let dependicies = []
  
  dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'dependencies'))
  dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'devDependencies'))

  return dependicies
}

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
    execa.commandSync(`npm uninstall ${dep}`)
  })
}

// 检查并移除旧的lint包
export const checkAndRemoveOldPackage = async (targetDir: string, packageName: string) => {
  const indirectDependicies = resolveSafeIndirectDependencies(packageName)

  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  // 卸载旧版lint包
  if ((jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
  ) {
    startSpinner(`resolving old package: ${packageName}`)
    execa.commandSync(`npm uninstall ${ packageName }`)
    succeedSpiner(`old package: ${packageName} resolved!`)
  }

  // 卸载lint已经包含的间接依赖
  tryToRemovePackage(targetDir, indirectDependicies)
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

export const initLint = (packageName: string, srcFileName: string, targetFileName: string, targetDir = cwd, handlebarParams?: Object) => {
  checkAndRemoveOldPackage(targetDir, packageName)

  if (fs.existsSync(`${targetDir}/${targetFileName}`)) {
    fs.removeSync(`${targetDir}/${targetFileName}`)
  }

  startSpinner(`adding new package: ${packageName}`)
  execa.commandSync(`npm install ${ packageName } --save-dev`)

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
  startSpinner(`installing husky`)
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

const action = async (projectName, cmdArgs) => {
  try {
    const targetDir = cwd
    const { targets } = await getQuestions()
    let eslintTarget = { type: '' }
    if (targets.includes('eslint')) {
      let eslintTypeList = globby.sync(['*.js'], { cwd: path.resolve(__dirname, '../../../eslint-config-selling'), deep: 1 }) || []
      eslintTypeList = eslintTypeList.filter((type: string) => {
        return type !== 'base.js' && type !== 'index.js'
      })
      eslintTarget = await inquirer.prompt([
        {
          type: 'list',
          name: 'type',
          message: `eslint type:`,
          choices: eslintTypeList.map((type: string) => {
            return type.split('.')[0]
          })
        }
      ])
    }
    targets.forEach((target: string) => {
      switch (target) {
        case 'eslint':
          startSpinner('init eslint')
          initLint(eslintPackageName, `../../templates/.eslintrc.js`, '.eslintrc.js', targetDir, { eslintType: eslintTarget.type });
          succeedSpiner('eslint init successed!')
          break;
        case 'stylelint':
          startSpinner(`init stylelint`)
          initLint(stylelintPackageName, `../../templates/.stylelintrc.js`, '.stylelintrc.js', targetDir);
          succeedSpiner('stylelint init successed!')
          break;
        case 'commitlint':
          startSpinner(`init commitlint`)
          installHusky(targetDir)
          initLint(commitlintPackageName, `../../templates/.commitlintrc.js`, '.commitlintrc.js', targetDir);
          succeedSpiner('commitlint init successed!')
          break;
      }
    })
    info(chalk.green('init successed!'))

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