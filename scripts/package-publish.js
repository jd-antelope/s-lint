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
  const execaCallback = {
    stdio: 'inherit',
    cwd,
  }
  const packageList = getPackagePath()
  packageList.map(v => {
    reWriteLicense(v)
  })
  execa.commandSync('git add .', execaCallback)
  execa.commandSync(`git commit -m package`, execaCallback)
  execa.commandSync('git push origin master', execaCallback)
  console.log('代码上传成功')
  execa.commandSync('yarn p', execaCallback)
  console.log('代码发布成功')
} 

start()