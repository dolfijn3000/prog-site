// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'prog site',
  tagline: 'site voor info voor klas 1GDPD4',
  url: 'https://dolfijn3000.github.io',
  baseUrl: '/prog-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dolfijn3000', // Usually your GitHub org/user name.
  projectName: 'prog-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ooa',
        path: 'ooa',
        routeBasePath: 'ooa',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'c-sharp',
        path: 'c-sharp',
        routeBasePath: 'c-sharp',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'front-end',
        path: 'front-end',
        routeBasePath: 'front-end',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'databases',
        path: 'databases',
        routeBasePath: 'databases',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '1GDPD4 site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {
            to: '/ooa/intro',    // ./docs/Intro.md
            label: 'OOA',
            position: 'left',
            docId: 'intro',
            activeBaseRegex: `/ooa/`,
          },
          {
            to: '/c-sharp/intro',    // ./docs/Intro.md
            label: 'c#',
            position: 'left',
            docId: 'intro',
            activeBaseRegex: `/c-sharp/`,
          },
          {
            to: '/front-end/intro',    // ./docs/Intro.md
            label: 'front-end',
            position: 'left',
            docId: 'intro',
            activeBaseRegex: `/front-end/`,
          },
          {
            to: '/databases/intro',    // ./docs/Intro.md
            label: 'databases',
            position: 'left',
            docId: 'intro',
            activeBaseRegex: `/databases/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/dolfijn3000/prog-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docusarus docs',
                href: 'https://docusaurus.io/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/tDZvYRUnJ5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dolfijn3000/prog-site',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
