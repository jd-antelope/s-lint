# index
 ```js
"use strict";

const color = require("./color");
const font = require("./font");
const functionRules = require("./function");
const number = require("./number");
const string = require("./string");
const length = require("./length");
const value = require("./value");
const shorthand = require("./shorthand");
const property = require("./property");
const declaration = require("./declaration");
const block = require("./block");
const selector = require("./selector");
const rule = require("./rule");
const media = require("./media");
const atRule = require("./at-rule");
const comment = require("./comment");
const general = require("./general");

module.exports = Object.assign(
  {},
  color,
  font,
  functionRules,
  number,
  string,
  length,
  value,
  shorthand,
  property,
  declaration,
  block,
  selector,
  rule,
  media,
  atRule,
  comment,
  general
);
```