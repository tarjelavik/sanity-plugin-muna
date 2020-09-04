module.exports = {
  title: 'Muna',
  tagline: 'Muna (remember) is a Sanity schema for describing and presenting cultural heritage objects.',
  url: 'https://docs.muna.xyz',
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
      items: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Installation',
          position: 'left',
        },
        {
          to: 'docs/model/home',
          activeBasePath: 'docs/model',
          label: 'Model',
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
