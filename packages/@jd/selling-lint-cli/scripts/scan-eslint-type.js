const path = require('path')
const fs = require('fs')
const globby = require('globby')

function scanEslintType () {
  let eslintTypeList = globby.sync(['*.js'], { cwd: path.resolve(__dirname, '../../eslint-config-selling'), deep: 1 }) || []
  eslintTypeList = eslintTypeList.filter((type) => {
    return type !== 'base.js' && type !== 'index.js'
  }).map((type) => {
    return type.slice(0, type.length - 3)
  })

  let content = '// 本文件由scan-eslint-type命令自动扫描生成，执行npm run build时将自动更新，无需手动修改\n'
  content += `export const eslintType = ` + JSON.stringify(eslintTypeList)
  fs.writeFileSync(path.resolve(__dirname, '../src/lib//eslintType.ts'), content)
}

scanEslintType()