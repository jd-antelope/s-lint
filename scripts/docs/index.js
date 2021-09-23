const globby = require('globby')
const cwd = process.cwd()
const path = require('path')
const fs = require('fs-extra')

const packageToDocsObj = {
    'commitlint-config-selling': 'commit',
    'eslint-config-selling': 'es',
    'selling-lint-cli': 'cli',
    'stylelint-config-selling': 'style'
}

// 获取子包路径
const getPackagePath = () => {
  const packagePaths = globby.sync(path.join(cwd, 'packages/@jd/'), {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  })
  return packagePaths
}

// 读取子包/readme.md到docs/子包/guide.md
const reWriteGuide = (packagePath) => {
  const content = fs.readFileSync(path.join(packagePath, 'README.md'), 'utf-8')
  const newContent = '# 介绍' + '\n' + content
  const packageName = packagePath.split('/').slice(-1).join('')
  const docPath = path.join(cwd, `lint-docs/docs/${packageToDocsObj[packageName]}/guide.md`)
  fs.writeFileSync(docPath, newContent)
}

const start = () => {
  const packagePaths = getPackagePath()
  for (const packagePath of packagePaths) {
    reWriteGuide(packagePath)
  }
  // 读取根readme到docs/整体/guide.md
  const content = fs.readFileSync(path.join(cwd, 'README.md'), 'utf-8')
  const newContent = '# 介绍' + '\n' + content
  const docPath = path.join(cwd, `lint-docs/docs/total/guide.md`)
  fs.writeFileSync(docPath, newContent)
}

start()
