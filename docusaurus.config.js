module.exports = {
  title: "Kapseli Framework",
  tagline:
    "A Framework for creating a SPA dashboard application. Designed for performance and flexibility.",
  url: "http://kapseli.stingydeveloper.com",
  baseUrl: "/",
  favicon: "/img/favicon.ico",
  organizationName: "Swindler36", // Usually your GitHub org/user name.
  projectName: "Kapseli-UI-Framework", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Kapseli",
      logo: {
        alt: "Kapseli UI Framework Logo",
        src: "/img/kapseli-logo.png",
      },
      items: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "docs/api", label: "API", position: "left" },
        {
          type: "dropdown",
          label: "Ecosystem",
          position: "left",
          items: [
            {
              to: "ecosystem/plugins",
              label: "Plugins",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Support",
          position: "left",
          items: [
            {
              label: "Become a Patron!",
              href: "https://www.patreon.com/bePatron?u=32387384",
            },
            {
              label: "Buy Me a Coffee",
              href: "https://www.buymeacoffee.com/stingydev",
            },
            {
              label: "Support on Kreosus!",
              href: "https://kreosus.com/stingydev",
            },
          ],
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },

        {
          href: "https://github.com/Swindler36/Kapseli-UI-Framework",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/introduction",
            },
            {
              label: "API",
              to: "docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/kapseli",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/developerstingy",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Swindler36/Kapseli-UI-Framework",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stingy Developer. All Rights Reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Swindler36/kapseli-docs/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Swindler36/kapseli-docs/edit/main/docs/blog/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/utility.css"),
            require.resolve("./src/css/dist/chevron.min.css"),
          ],
        },
      },
    ],
  ],
  scripts: [
    "https://www.googletagmanager.com/gtag/js?id=G-YWWJJ2YLKV",
    "https://cover.js.org/assets/goggle-analytics.js",
  ],

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};
