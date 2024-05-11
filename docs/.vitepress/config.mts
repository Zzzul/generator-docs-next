import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    i18nRouting: true,
    search: {
      provider: 'local',
    }
    // // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  },

  locales: {
    root: {
      title: "My Awesome Project",
      description: "A VitePress Site",
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Examples',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You'
        }
      },
    },
    id: {
      title: "My Awesome Project ID",
      description: "A VitePress Site",
      label: 'Indonesia',
      lang: 'id', // optional, will be added  as `lang` attribute on `html` tag
      link: '/id/', // default /id/ -- shows on navbar translations menu, can be external
      themeConfig: {
        nav: [
          { text: 'Rumah', link: '/' },
          { text: 'Contoh', link: '/id/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Latest (0.3.x)',
            // collapsed: true,
            items: [
              {
                text: 'Markdown contoh',
                items: [
                  {
                    text: 'Markdown contoh',
                    link: '/id/markdown-examples'
                  }
                ]
              },
              // { text: 'Runtime API contoh', link: '/id/api-examples' }
            ]
          },
          {
            text: '0.2.3',
            collapsed: true,
            items: [
              {
                text: 'Markdown contoh',
                items: [
                  {
                    text: 'Markdown contoh',
                    link: '/id/0.2.3/markdown-examples'
                  },
                  {
                    text: 'API contoh',
                    link: '/id/0.2.3/api-examples'
                  }
                ]
              },
              // { text: 'Runtime API contoh', link: '/id/api-examples' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        footer: {
          message: 'Dirilis dibawah lisensi MIT.',
          copyright: 'Copyright © 2019-sekarang Mohammad Zulfahmi & Evdigi-INA'
        }
      },
    }
  }
})
