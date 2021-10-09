const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'selling-lint',
  tagline: '一个全面、通用的前端Lint规范解决方案',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JD',
  projectName: 'front-lint',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '商羚前端Lint规范',
        logo: {
          alt: '商羚前端Lint规范 Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: 'docs/es/guide',
            position: 'left',
            label: 'ESLint',
            activeBaseRegex: 'docs/es/'
          },
          {
            to: 'docs/style/guide',
            label: 'StyleLint', 
            position: 'left',
            activeBaseRegex: 'docs/style/'
          },
          { 
            to: 'docs/commit/guide',
            label: 'CommitLint', 
            position: 'left',
            activeBaseRegex: 'docs/commit/',
          },
          { 
            to: 'docs/cli/guide',
            label: 'CLI', 
            position: 'left',
            activeBaseRegex: 'docs/stcliyle/',
          },
          {
            href: 'http://coding.jd.com/selling-front/frontend-lint/issues/',
            label: '反馈issues',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 京东零售 零售云SaaS技术部-SaaS研发部-前端研发组`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
});
