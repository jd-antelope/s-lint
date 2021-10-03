// license
const globby = require('globby')
const fs = require('fs-extra')
const uuid = require('uuid')
const execa = require('execa')
const cwd = process.cwd()

const getPackagePath = () => {
  const packagePaths = globby.sync('../packages/@jd', {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  })
  return packagePaths.map((item) => item.replace('../', ''))
}

const reWriteLicense = (v) => {
  fs.writeFileSync(`${v}/LICENSE.txt`, uuid.v4())
  console.log('重写license成功')
}

const start = () => {
  const packageList = getPackagePath()
  packageList.map(v => {
    reWriteLicense(v)
  })
  console.log(cwd)
  execa.commandSync('git add .', {
    stdio: 'inherit',
    cwd,
  })
  execa.commandSync('git commit -m "fix: change command"', {
    stdio: 'inherit',
    cwd,
  })
} 

start()