# rule
 **** 
 
 具体规则如下：
 ```js
module.exports = {
  "rule-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["after-comment"],
      message: "规则前必须加空行"
    }
  ]
};
```