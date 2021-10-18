module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // <type> 不能为空
    'scope-empty': [2, 'always'],
    // <type> 不能为空
    'type-empty': [2, 'never'], 
    // <type>格式小写
    'type-case': [2, 'always', 'lower-case'], 
    // <scope> 格式 小写
    'scope-case': [2, 'always', 'lower-case'], 
    // <subject> 不能为空
    'subject-empty': [2, 'never'], 
    // <subject> 以.为结束标志
    'subject-full-stop': [2, 'never', '.'], 
    'subject-case': [2, 'never', []],
    // body换行
    'body-leading-blank': [2, 'always'], 
    // <footer> 以空行开头
    'footer-leading-blank': [1, 'always'], 
    // header 最长72
    'header-max-length': [2, 'never', 72], 
    'type-enum': [
      2, 
      'always',
      [
        // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'build', 
        // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
        'chore', 
        // 持续集成修改
        'ci', 
        // 文档修改
        'docs', 
        // 新特性、新功能
        'feat', 
        // 修改bug
        'fix', 
        // 优化相关，比如提升性能、体验
        'perf', 
        // 代码重构
        'refactor', 
        // 回滚到上一个版本
        'revert', 
        // 代码格式修改, 注意不是 css 修改
        'style', 
        // 测试用例修改
        'test', 
        // Add custom type
        'page', // Update page use api fech data
        'ui', // Changes page layout and style
        'release', // Release version
      ],
    ],
  },
}
