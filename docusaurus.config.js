module.exports = {
  title: 'Kapseli',
  tagline: 'A UI Framework for creating a SPA dashboard application.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Swindler36', // Usually your GitHub org/user name.
  projectName: 'Kapseli-UI-Framework', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kapseli',
      logo: {
        alt: 'Kapseli UI Framework Logo',
        src: 'img/kapseli-logo.png',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/api', label: 'API', position: 'left'},
        {to: 'ecosystem', label: 'Ecosystem', position: 'left'},
        {to: 'support', label: 'Support', position: 'left'},
        {to: 'translations', label: 'Translations', position: 'left'},
        {
          href: 'https://github.com/Swindler36/Kapseli-UI-Framework',
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
              label: 'Docs',
              to: 'docs/introduction',
            },
            {
              label: 'API',
              to: 'docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/kapseli',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/developerstingy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Swindler36/Kapseli-UI-Framework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stingy Developer. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Swindler36/kapseli-docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Swindler36/kapseli-docs/edit/main/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
