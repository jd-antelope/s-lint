- function
    - // 要求或禁止 url 使用引号
    "function-url-quotes": ["never", {"message": "要求 url 不使用引号"}],

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
    - // 限制行的长度
    "max-line-length": [30, {"message": "限制行的长度：30"}]

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
