const doctrine  = require('doctrine')

const getJsHeadComment = (content) => {
    if (content.startsWith('/**')) {
        const comment = content.match(/^[\/\*\*]([\s\S]*?[\@rulesName][\s\S]*?)\*\//)
        if (comment) {
            return comment[0]
        }
    }
    return ""
}

const parseCommentToAst = (comment) => {
    const ast = doctrine.parse(comment, { unwrap: true })
    let docInfo = {} 
    ast.tags.forEach(item => {
        docInfo[item.title] = item.description
    })
    return docInfo
}

const parseComment = (content) => {
    const comment = getJsHeadComment(content)
    if(comment){
        return parseCommentToAst(comment)
    } else {
        return ""
    }
}

module.exports = {
    parseComment
}