import * as chalk from 'chalk'

export const warn = (text) => {
  console.log(chalk.yellow(`\n${text}\n`))
}

export const info = (text) => {
  console.log(chalk.cyan(`\n${text}\n`))
}

export const error = (text) => {
  console.log(chalk.bgRed(`\n${text}\n`))
}
