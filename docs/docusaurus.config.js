module.exports = {
  title: 'Muna',
  tagline: 'Muna (remember) is a Sanity schema for describing and presenting cultural heritage objects.',
  url: 'https://tarjelavik.github.io.',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tarjelavik', // Usually your GitHub org/user name.
  projectName: 'sanity-plugin-muna', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Muna',
      /* logo: {
        alt: 'Muna Logo',
        src: 'img/logo.svg',
      }, */
      links: [
        {
          to: 'docs/home',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tarjelavik/sanity-plugin-muna',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    /* footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/home',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tarjelavik/sanity-plugin-muna',
            },
          ],
        },
      ],
      copyright: `Copyleft ${new Date().getFullYear()} Muna`,
    }, */
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tarjelavik/sanity-plugin-muna/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
