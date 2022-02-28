"use strict";
const atRule = require("./at-rule");
const block = require("./block");
const color = require("./color");
const comment = require("./comment");
const custom = require("./custom")
const declaration = require("./declaration")
const font = require("./font");
const functionRules = require("./function");
const keyframe = require("./keyframe")
const length = require("./length")
const linebreaks = require("./linebreaks")
const max = require("./max")
const media = require("./media")
const no = require("./no")
const number = require("./number");
const property = require("./property");
const rule = require("./rule");
const selector = require("./selector");
const shorthand = require("./shorthand");
const string = require("./string");
const time = require("./time")
const unit = require("./unit");
const value = require("./value");

module.exports = Object.assign(
  {},
  atRule,
  block,
  color,
  comment,
  custom,
  declaration,
  font,
  functionRules,
  keyframe,
  length,
  linebreaks,
  max,
  media,
  no,
  number,
  property,
  rule,
  selector,
  shorthand,
  string,
  time,
  unit,
  value,
);
