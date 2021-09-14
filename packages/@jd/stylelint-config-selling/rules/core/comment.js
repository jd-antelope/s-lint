"use strict";

module.exports = {
  "comment-word-blacklist": ["/TODO|FIXME/i", {"severity": "warning", "message": "TODO 和 FIXME不要出现在注释中，希望你解决掉"}]
//   "comment-empty-line-before": [
//     "always",
//     {
//       except: ["first-nested"],
//       ignore: ["stylelint-commands", "after-comment"]
//     }
//   ],
//   "comment-no-empty": true,
//   "comment-whitespace-inside": "always"
};
