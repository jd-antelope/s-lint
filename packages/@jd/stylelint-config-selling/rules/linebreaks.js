/**
 * @rulesName 换行符
 * @rulesDesc 换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规
 */

"use strict";

module.exports = {
    // 换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规
    linebreaks: [
        "unix",
        {
            message: '换行符必须始终为LF( \n)，带有CRLF( \r\n)换行符的行被视为违规'
        }
    ]
}