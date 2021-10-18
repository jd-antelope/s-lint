/**
 * @rulesName 排序
 * @rulesDesc 著名的Web前端专家Andy Ford推荐过一种按照类型分组排序的方式，他把CSS属性分为7大类：显示与浮动（Diplay&Flow）、定位（Positioning）、尺寸（Dimensions）、边框相关属性（Margins、Padding、Borders、Outline）、字体样式（Typographic Styles）、背景（Backgrounds）、其他样式（Opacity、Cursors、Generated Content）；这种按照样式类型分组排列的方式不仅把功能相似的属性归类在一起，并且按照样式功能的重要性从上到下进行了排列。可以把影响元素页面布局的样式（如float、margin、padding、height、width等）排到前面，而把不影响布局的样式（如background、color、font等）放到后面。这种主次分明的排列方式，极大地提高了代码的可维护性，提高了渲染性能
 */

"use strict";

module.exports = {
  "order/order": [
    "custom-properties",
    {
      type: 'at-rule',
      hasBlock: true,
    },
    "declarations"
  ],
  "order/properties-order": [
    [
      // 伪类内容
      "content",

      // Layout
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",

      // Flex Layout
      // flex属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto
      "flex",
      "flex-align",
      // 设置主轴上的初始大小
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      // 是 flex-direction 和 flex-wrap 的简写形式，默认值为row nowrap
      "flex-flow",
      "flex-shrink",
      "flex-grow",
      "flex-order",
      "flex-pack",
      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "order",

      // Box
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-lef",

      // Border
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-spacing",
      "border-collapse",

      // 描边
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",

      // Overflow
      "overflow",
      "overflow-x",
      "overflow-y",
      '-webkit-overflow-scrolling',
      '-ms-overflow-style',

      // 浮动
      "float",
      "clear",

      // 列布局
      "columns",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-span",
      "column-width",
      "grid-gap",
      "grid-template-columns",

      // 字体和排版
      "font",
      "font-family",
      "font-size",
      "font-style",
      "font-weight",
      // 定义小型大写字母
      "font-variant",
      // 调整字体大小，目前只有 Firefox 实现了
      "font-size-adjust",
      // 为字体定义一个正常或经过伸缩变形的字体外观
      "font-stretch",
      // 目前浏览器不支持
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "font-smoothing",
      "'-moz-osx-font-smoothing'",
      "'-webkit-font-smoothing'",
      // 断行时连字符的处理
      "hyphens",
      "line-height",

      // 前景和背景
      "color",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "filter",
      // svg 中填充
      "fill",
      "stroke",
      "clip",

      // 对齐方式
      "text-align",
      "text-align-last",
      // 目前 Firefox 和 Chrome 浏览器支持
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-decoration",
      "text-indent",
      "text-justify",
      "text-outline",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "letter-spacing",
      "'-webkit-line-clamp'",
      "word-break",
      "word-spacing",
      "word-wrap",
      "overflow-wrap",
      "tab-size",
      "white-space",
      "vertical-align",
      // 设置文本的显示方向
      "direction",
      // 设置文本方向
      "unicode-bidi",

      // List
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",

      // 动画
      "opacity",
      "-ms-interpolation-mode",
      // 元素被查看位置的视图
      "perspective",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "will-change",

      // Cursor
      "cursor",
      "pointer-events",
      "user-select",

      // Other
      "resize",
      "touch-action",
      "visibility",
      "table-layout",
      "empty-cells",
      "caption-side",
      "quotes",
      "counter-reset",
      "counter-increment",
      "nav-index",
      "nav-up",
      "nav-down",
      "nav-left",
      "nav-right",
      // 设置元素的默认展示样式
      "appearance",
      "speak",

      // 打印属性
      "orphans",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "widows"
    ],
  ],
  "order/properties-alphabetical-order": null
};
