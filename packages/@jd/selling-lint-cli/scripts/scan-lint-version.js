const path = require('path')
const fs = require('fs')

function scanLintVersion () {

}

function scanVersion () {
  let resultContent = '// 本文件由scan-deps命令自动扫描生成，执行npm run build时将自动更新，无需手动修改\n'
  const pkgs = ['eslint-config-selling', 'commitlint-config-selling', 'stylelint-config-selling']
  pkgs.forEach((folderName) => {
    resultContent += (`export const  = ${JSON.stringify(resolveIndirectDependencies(folderName))}\n`)
  })
  fs.writeFileSync(path.resolve(__dirname, '../src/lib/safeDeps.ts'), resultContent)
}