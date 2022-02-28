const eslintPackageName = 'eslint-config-selling'
const commitlintPackageName = 'commitlint-config-selling'
const stylelintPackageName = 'stylelint-config-selling'
const packageMap = {
  folderName: {
    'eslint-config-selling': 'eslint-config-selling',
    'commitlint-config-selling': 'commitlint-config-selling',
    'stylelint-config-selling': 'stylelint-config-selling'
  },
  lintType: {
    'eslint-config-selling': 'eslint',
    'commitlint-config-selling': 'commitlint',
    'stylelint-config-selling': 'stylelint'
  },
  depNames: {
    'eslint-config-selling': 'eslintDeps',
    'commitlint-config-selling': 'commitlintDeps',
    'stylelint-config-selling': 'stylelintDeps'
  }
}
const path = require('path')
const fs = require('fs')

const safeDependencies = ['eslint', 'commitlint', 'stylelint']

function resolveSafeDepList (jsonResult, key) {
  if (jsonResult.hasOwnProperty(key)) {
    return Object.keys(jsonResult[key]).filter((pkg) => {
      return safeDependencies.some((sd) => {
        return pkg.indexOf(sd) > -1
      })
    })
  }

  return []
}

function resolveIndirectDependencies (packageName) {
  const jsonPath = path.resolve(__dirname, `../../${packageMap.folderName[packageName]}/package.json`)
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = JSON.parse(jsonContent)

  let dependicies = []
  
  dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'dependencies'))
  dependicies = dependicies.concat(resolveSafeDepList(jsonResult, 'devDependencies'))

  return dependicies
}

function resolveAllDependencies () {
  let resultContent = '// 本文件由scan-deps命令自动扫描生成，执行npm run build时将自动更新，无需手动修改\n'
  const pkgs = [eslintPackageName, stylelintPackageName, commitlintPackageName]
  pkgs.forEach((packageName) => {
    resultContent += (`export const ${packageMap.depNames[packageName]} = ${JSON.stringify(resolveIndirectDependencies(packageName))}\n`)
  })
  fs.writeFileSync(path.resolve(__dirname, '../src/lib/safeDeps.ts'), resultContent)
}

resolveAllDependencies()