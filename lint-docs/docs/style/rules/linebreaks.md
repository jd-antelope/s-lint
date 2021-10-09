# 换行符
 **换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规** 
 
 具体规则如下：
 ```js
module.exports = {
    // 换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规
    linebreaks: [
        "unix",
        {
            message: '换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规'
        }
    ]
}```