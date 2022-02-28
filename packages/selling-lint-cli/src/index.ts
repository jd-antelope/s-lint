import * as globby from 'globby'
import * as commander from 'commander'
import * as fs from 'fs-extra'
import * as path from 'path'
import { error } from './lib'

const { program } = commander

let commandsPath = []

// 获取命令
const getCommand = () => {
  commandsPath =
    (globby as any).sync('./commands/*.*s', { cwd: __dirname, deep: 1 }) || []
  return commandsPath
}

async function start () {
  const commandsPath = getCommand()

  const jsonPath = path.join(__dirname, '../package.json')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const jsonResult = JSON.parse(jsonContent)
  program.version(jsonResult.version)

  commandsPath.forEach((commandPath: string) => {
    const commandObj = require(`./${commandPath}`)
    const { command, description, optionList, action } = commandObj.default
    // console.log(optionList)
    const options =
      optionList &&
      optionList.map((option: any) => {
        return `.option(${option[0]},${option[1]})`
      })

    // console.log(options)
    const curp = program
      .command(command)
      .description(description)
      .action(action)
    optionList &&
      optionList.map((option: [string]) => {
        curp.option(...option)
      })
  })

  program.arguments('[command]').action((cmd) => {
    if (!cmd) {
      program.outputHelp()
      return
    }
    error(`未知的命令${cmd}`)
    program.outputHelp()
  })

  program.parseAsync(process.argv)
}

start()