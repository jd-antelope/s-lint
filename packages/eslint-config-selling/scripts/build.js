const path = require('path');
const fs = require('fs');

const constants = {
  buildList: ['taro', 'react', 'base', 'index', 'next', 'typescript', 'vue']
}

function getPackageDev () {
  const filename = path.resolve(__dirname, '..', 'package.json')
  const content = fs.readFileSync(filename, 'utf-8')
  const reg = /\"dependencies\"\: \{(([\s\S])*?)\}/g
  const contentReg = content.match(reg)[0]
  
  return str = contentReg.split('{')[1].split('}')[0]
}

function getTemplate (file) {
  const filename = path.resolve(__dirname, '..', file)
  return fs.readFileSync(filename, 'utf-8')
}

function writeAllFile (file, content) {
  const defaultFile = getTemplate('./scripts/template.txt').replace('{$1}', content)
  const temp = getTemplate(`./${file}.js`).split('*/')[1]
  const info = `${defaultFile}${temp}`
  fs.writeFile(`./${file}.js`, info, () => {
    console.log(`${file}文件打包成功`)
  })
}

async function start () {
  const content = await getPackageDev()
  constants.buildList.map(v => {
    writeAllFile(v, content)
  })
}

start();