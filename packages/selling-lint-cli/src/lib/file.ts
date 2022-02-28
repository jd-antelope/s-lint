import * as fs from 'fs-extra'
import * as execa from 'execa'
import * as path from 'path'
import * as handlebars from 'handlebars'
import {
  cwd,
  info
} from './index.js'
import { PackageJson } from './type'

export const copyFile = async (srcPath: string, tarPath: string, cb?: Function) => {
  const rs = fs.createReadStream(srcPath)
  rs.on('error', function (err: Object) {
    if (err) {
      console.log('read error', srcPath, err)
    }
  })

  var ws = fs.createWriteStream(tarPath)
  ws.on('error', function (err) {
    if (err) {
      console.log('write error', tarPath)
    }
  })

  ws.on('close', function (ex) {
    cb && cb()
  })

  rs.pipe(ws)
}

export const cloneProject = async (targetDir, projectName, projectInfo) => {
  // startSpinner(`开始创建私服仓库 ${chalk.cyan(targetDir)}`)
  // 复制'private-server-boilerplate'到目标路径下创建工程
  await fs.copy(
    path.join(__dirname, '..', '..', 'private-server-boilerplate'),
    targetDir
  )

  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = handlebars.compile(jsonContent)(projectInfo)
  fs.writeFileSync(jsonPath, jsonResult)

  // 新建工程装包
  execa.commandSync('npm install', {
    stdio: 'inherit',
    cwd: targetDir,
  })

  // succeedSpiner(
  //   `私服仓库创建完成 ${chalk.yellow(projectName)}\n👉 输入以下命令开启私服:`
  // )

  info(`$ cd ${projectName}\n$ sh start.sh\n`)
}

export const readPackageJson = async (targetDir: string = './') => {
  const _packageJson = fs.readFileSync(path.join(targetDir, 'package.json'))
  return JSON.parse(_packageJson)
}

export const hasPackage = (packageName: string, targetDir = cwd) => {
  // handlebars模版引擎解析用户输入的信息存在package.json
  const jsonPath = `${targetDir}/package.json`
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult: PackageJson = JSON.parse(jsonContent)
  return (jsonResult.hasOwnProperty('dependencies') && jsonResult.dependencies.hasOwnProperty(packageName)) ||
    (jsonResult.hasOwnProperty('devDependencies') && jsonResult.devDependencies.hasOwnProperty(packageName))
}