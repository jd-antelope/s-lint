module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'always'],
    // 'body-max-length': [2, 'always', 0],
    'type-enum': [
      2,
      'always',
      [
        'build', // Affects the build system or external dependencies.
        'chore', // Other changes that don't modify src or test files
        'ci', // Changes CI configuration files and scripts.
        'docs', // Adds or alters documentation.
        'feat', // Adds a new feature.
        'fix', // Solves a bug.
        'perf', // Improves performance.
        'refactor', // Rewrites code without feature, performance or bug changes.
        'revert', // Reverts a previous commit.
        'style', // Improves formatting, white-space.
        'test', // Adds or modifies tests.

        // Add custom type
        'page', // Update page use api fech data
        'ui', // Changes page layout and style
        'release', // Release version
      ],
    ],
  },
}
