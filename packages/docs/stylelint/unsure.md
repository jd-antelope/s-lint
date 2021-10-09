- function
    - // 指定允许的URL方案列表
    // "function-url-scheme-allowed-list": ["http", "https"],

    - // 指定不允许的URL方案列表
    // "function-url-scheme-disallowed-list": null,

- color
    - // 禁止使用颜色名称来定义颜色
    "color-named": ["never", {"message":"禁止使用颜色名称来定义颜色"}],

    - // 为十六进制颜色指定小写或大写
    "color-hex-case": ["upper", {"message":"十六进制颜色指定大写"}],

    - // 为十六进制颜色指定短符号或长符号
    "color-hex-length": ["long", {"message":"颜色十六进制长度为长符号"}],

    - // 禁止无效的十六进制颜色
    "color-no-invalid-hex": true

- comment
    - // 在评论中指定不允许使用的单词列表
    "comment-word-disallowed-list": ["/TODO|FIXME/i", {"severity": "warning", "message": "TODO 和 FIXME 不要出现在注释中，希望你解决掉"}],

    - // 评论前要求或禁止空行。
    "comment-empty-line-before": [
    "always",
    {
    except: ["first-nested"],
    ignore: ["stylelint-commands", "after-comment"]
    }
    ],

    - // 禁止空评论
    "comment-no-empty": [true, {"message":"注释不能为空"}],

    - // 要求或禁止评论标记内部有空格
    "comment-whitespace-inside": ["always", {"message":"要求评论标记内部有空格"}],

- max
    - // 限制允许嵌套的深度
    "max-nesting-depth": [4, {"message": "限制允许嵌套的深度：4"}],
    - // 限制相邻空行的数量
    "max-empty-lines": [4, {"message": "限制相邻空行的数量：4"}],

- media
    - // 禁止 media 特性名称带有浏览器引擎前缀
    "media-feature-name-no-vendor-prefix": true,

- value
    - // 禁止给值添加浏览器引擎前缀
    "value-no-vendor-prefix": true,
     
- declaration
    - // 允许使用!important
    "declaration-no-important": null,

    - // 在模块中指定不允许的属性和单位对列表
    // "declaration-property-unit-blacklist": null, 

    - // 在模块中指定允许的属性和单位对列表
    "declaration-property-unit-allowed-list":  [{
        "font-size": [
            "rem",
            "px",
            "%"
        ]
    }],

    - // 在模块中指定不允许的属性和值对列表
    "declaration-property-value-disallowed-list": {
        "/border/": ["/thin/", "/medium/", "/thick/"],
        "/transition/": ["/all/"],
        "/transition-property/": ["/all/"]
    },

- font
    - // 禁止在字体系列名称列表中缺少通用系列
    "font-family-no-missing-generic-family-keyword": [
        true,
        {
        "message": "禁止在字体系列名称列表中缺少通用系列"
        }
    ],
    - // font-weight值必须始终是数字
    "font-weight-notation": [
        "numeric",
        {
        "message": "font-weight值必须始终是数字"
        }
    ],

- selector
    - // 指定允许的属性运算符列表
    "selector-attribute-operator-allowed-list": null,
    - // 限制选择器中类型选择器的数量
    "selector-max-type": 2,
    - // 禁止未知类型选择器
    "selector-type-no-unknown": [
    true,
    {
      ignoreTypes: ["noindex"]
    }
  ]

- shorthand
    - // 禁止覆盖相关普通属性的简写属性
    "declaration-block-no-shorthand-property-overrides": false

- selector
    - // 为内嵌规则的选择器指定规则
    "selector-nested-pattern": "^&-(:hover|focus|active|visited|focus-within|focus-visible|target)?.*",