/**
 * @rulesName 关键帧
 * @rulesDesc 禁止!important在关键帧@keyframes声明中
 */

"use strict";

module.exports = {
    // 禁止!important在关键帧声明中
    "keyframe-declaration-no-important": [
        true,
        {
            message: '禁止!important在关键帧声明中'
        }
    ],

    // 指定关键帧名称的模式，关闭
    "keyframes-name-pattern": null
}