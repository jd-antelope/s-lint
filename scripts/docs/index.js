const globby = require('globby')
const cwd = process.cwd()
const path = require('path')
const fs = require('fs-extra')

const { parseComment } = require('./parse')

const packageToDocsObj = {
  'commitlint-config-selling': 'commit',
  'eslint-config-selling': 'es',
  'selling-lint-cli': 'cli',
  'stylelint-config-selling': 'style'
}

const doc_sidebar_position = '---\nsidebar_position: 1\n---\n'

// 获取子包路径
const getPackagePath = () => {
  const packagePaths = globby.sync(path.join(cwd, 'packages/@jd/'), {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  })
  return packagePaths
}

const transReadMetoMd = (content) => {
  return `${doc_sidebar_position}# 介绍\n` + content
}

// 读取子包/readme.md到docs/子包/guide.md
const reWriteGuide = (packagePath) => {
  const content = fs.readFileSync(path.join(packagePath, 'README.md'), 'utf-8')
  const newContent = transReadMetoMd(content)
  const packageName = packagePath.split('/').slice(-1).join('')
  const docPath = path.join(
    cwd,
    `lint-docs/docs/${packageToDocsObj[packageName]}/guide.md`
  )
  fs.writeFileSync(docPath, newContent)
}

const reWriteRules = (packagePath) => {
  const packageName = packagePath.split('/').slice(-1).join('')
  const rulePaths = globby.sync(path.join(packagePath, 'rules'), {
    cwd: __dirname,
    deep: 1,
  })
  for (const rulePath of rulePaths) {
    const ruleName = rulePath.split("/").splice(-1).join("").replace('.js', '')
    if (ruleName !== 'index') {
      const docRulePath = path.join(
        cwd,
        `lint-docs/docs/${packageToDocsObj[packageName]}/rules/${ruleName}.md`
      )
      const content = fs.readFileSync(rulePath, 'utf-8')

      const docInfo = parseComment(content)
      const ruleTitle = docInfo.rulesName || ruleName

      const jsBody = content.match(/module.exports[\s\S]*/) ? content.match(/module.exports[\s\S]*/)[0] : ""

      let newContent = `# ${ruleTitle}\n **${docInfo.rulesDesc || ""}** \n \n 具体规则如下：\n \`\`\`js\n${jsBody}\`\`\``
      if(ruleName === 'order'){
        newContent = doc_sidebar_position + newContent
      }
      fs.writeFileSync(docRulePath, newContent)
    }
  }
}

const start = () => {
  const packagePaths = getPackagePath()
  for (const packagePath of packagePaths) {
    reWriteGuide(packagePath)
    reWriteRules(packagePath)
  }
  // 读取根readme到docs/整体/guide.md
  const content = fs.readFileSync(path.join(cwd, 'README.md'), 'utf-8')
  const newContent = transReadMetoMd(content)
  const docPath = path.join(cwd, `lint-docs/docs/total/guide.md`)
  fs.writeFileSync(docPath, newContent)
}

start()
