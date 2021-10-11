import * as ora from 'ora'
import * as chalk from 'chalk'

export const spinner = ora()

export const startSpinner = (text) => {
  const msg = `${text}...\n`
  spinner.start(msg)
  return spinner
  // spinner.stopAndPersist({
  //   symbol: '✨',
  //   text: msg,
  // })
}

export const succeedSpiner = (text) => {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: text
  })
}

export const failSpinner = (text) => {
  spinner.stopAndPersist()
  spinner.fail(chalk.red(text))
}
