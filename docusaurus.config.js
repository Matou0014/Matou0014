// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mathias Pepin-Leduc',
  tagline: 'Where all my random stuff is stored.',
  url: 'https://matou0014.github.io',
  baseUrl: '/matou0014/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  organizationName: 'Matou0014',
  projectName: 'Matou0014',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          breadcrumbs: true,
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        title: 'Mathias Pepin-Leduc',
      items: [
        {
          href: "https://steamcommunity.com/id/Matou0014",
          className: "header-icon-link header-steam-link",
          position: "left",
        },
        {
          href: "https://github.com/Matou0014",
          className: "header-icon-link header-github-link",
          position: "left",
        },
      ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Mathias Pepin-Leduc (docusaurus-2.0.0-beta.20)`,
        logo: {
          alt: 'Exvoid Network',
          src: '/img/header.png',
          href: 'https://exvoid.net',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
