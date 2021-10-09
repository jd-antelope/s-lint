import * as ora from 'ora'
import * as chalk from 'chalk'

const spinner = ora()

export const startSpinner = (text) => {
  const msg = `${text}...\n`
  spinner.start(msg)
  spinner.stopAndPersist({
    symbol: '✨',
    text: msg,
  })
}

export const succeedSpiner = (text) => {
  spinner.stopAndPersist({
    symbol: '🎉',
    text: `${text}\n`
  })
}

export const failSpinner = (text) => {
  spinner.fail(chalk.red(text))
}
