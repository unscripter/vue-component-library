module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Anatta Component Library 🥂',
      description: 'Documentation site for the Anatta Design Vue component library'
    }
  },
  themeConfig: {
    repoLabel: 'Contribute!',
    logo: '/anatta.png',
    // git repo here... gitlab, github
    repo: 'https://github.com/unscripter/vue-cpmponent-library',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [ {
            text: 'Getting Started',
            link: '/guide'
          },
          {
            text: 'Components',
            link: '/components/'
          },
          // external link to git repo...again
          {
            text: 'GitHub',
            link: 'https://github.com/unscripter/vue-cpmponent-library'
          }
        ],
        sidebar: {
          '/components/': [ {
            title: 'Components',
            collapsable: false,
            children: [ 'base-component', 'input-tags', 'counter', 'tab-structure', 'base-anchor' ]
          } ]
        }
      }
    }
  }
}