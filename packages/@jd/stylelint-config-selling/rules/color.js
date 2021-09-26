/**
 * @rulesName 颜色
 */

"use strict";

module.exports = {
  // 禁止使用颜色名称来定义颜色
  "color-named": ["never", {"message":"禁止使用颜色名称来定义颜色"}],

  // 为十六进制颜色指定小写或大写
  "color-hex-case": ["upper", {"message":"十六进制颜色指定大写"}],

  // 为十六进制颜色指定短符号或长符号
  "color-hex-length": ["long", {"message":"颜色十六进制长度为长符号"}],

  // 禁止无效的十六进制颜色
  "color-no-invalid-hex": true  
};
