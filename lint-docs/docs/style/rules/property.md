# property
 ```js
"use strict";

module.exports = {
  // 禁止使用未知属性
  "property-no-unknown": [
    true,
    {
      ignoreProperties: ["composes","contain"]
    }
  ]
  // 待定
  // "property-blacklist": null,
  // "property-case": "lower",
  // "property-no-vendor-prefix": true,
  // "property-whitelist": null
};
```