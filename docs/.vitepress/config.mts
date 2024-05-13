import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  base: '/generator-docs-next/',
  themeConfig: {
    i18nRouting: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          id: {
            placeholder: 'Cari dokumentasi',
            translations: {
              button: {
                buttonText: 'Pencarian',
                buttonAriaLabel: 'Pencarian'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: 'Bersihkan pencarian',
                  resetButtonAriaLabel: 'Bersihkan pencarian',
                  cancelButtonText: 'Batalkan',
                  cancelButtonAriaLabel: 'Batalkan'
                },
                startScreen: {
                  recentSearchesTitle: 'Riwayat pencarian',
                  noRecentSearchesText: 'Tidak ada pencarian terbaru',
                  saveRecentSearchButtonTitle: 'Simpan ke riwayat pencarian',
                  removeRecentSearchButtonTitle: 'Hapus dari Riwayat pencarian',
                  favoriteSearchesTitle: 'Favorit',
                  removeFavoriteSearchButtonTitle: 'Hapus dari favorit'
                },
                errorScreen: {
                  titleText: 'Tidak dapat mendapatkan hasil',
                  helpText: 'Periksa koneksi internet Anda'
                },
                footer: {
                  selectText: 'Pilih',
                  navigateText: 'Navigasi',
                  closeText: 'Tutup',
                  searchByText: 'Cari dengan'
                },
                noResultsScreen: {
                  noResultsText: 'Tidak dapat menemukan hasil',
                  suggestedQueryText: 'Anda dapat mencoba kueri baru',
                  reportMissingResultsText: 'Harusnya ada hasil untuk kueri ini?',
                  reportMissingResultsLinkText: 'Klik untuk mengirim umpan balik'
                }
              }
            }
          }
        }
      }
      
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
    //   { icon: 'github', link: 'https://github.com/Evdigi-INA/generator' }
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
        // nav: [
        //   { text: 'Get Started', link: '/' },
        //   { text: 'Introduction', link: '/markdown-examples' }
        // ],

        sidebar: [
          {
            text: 'Latest (0.3.x)',
            items: [
              { text: 'Introduction',  link: '/en/' },
              { text: 'Getting Started',  link: '/en/getting-started' },
              { text: 'Features',  link: '/en/features' },
              { text: 'Usage',  link: '/en/usage' },
              { text: 'How To Contribute',  link: '/en/how-to-contribute' },
              { text: 'Sponsors/Support',  link: '/en/sponsors' }
            ]
          },
          {
            text: '0.2.3',
            collapsed: true,
            items: [
              { text: 'Introduction',  link: '/en/0.2.3/' },
              { text: 'Getting Started',  link: '/en/0.2.3/getting-started' },
              { text: 'Features',  link: '/en/0.2.3/features' },
              { text: 'Usage',  link: '/en/0.2.3/usage' },
              { text: 'How To Contribute',  link: '/en/0.2.3/how-to-contribute' },
              { text: 'Sponsors/Support',  link: '/en/0.2.3/sponsors' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Evdigi-INA/generator' }
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
      lang: 'id-ID', // optional, will be added  as `lang` attribute on `html` tag
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
              { text: 'Pengenalan',  link: '/id/0.2.3/' },
              { text: 'Mari Mulai',  link: '/id/0.2.3/getting-started' },
              { text: 'Fitur',  link: '/id/0.2.3/features' },
              { text: 'Cara Pemakaian',  link: '/id/0.2.3/usage' },
              { text: 'Cara Berkontribusi',  link: '/id/0.2.3/how-to-contribute' },
              { text: 'Dukungan',  link: '/id/0.2.3/sponsors' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Evdigi-INA/generator' }
        ],
        footer: {
          message: 'Dirilis dibawah lisensi MIT.',
          copyright: 'Copyright © 2019-sekarang Mohammad Zulfahmi & Evdigi-INA'
        },
        editLink: {
          pattern: 'https://github.com/Evdigi-INA/generator/edit/main/docs/:path',
          text: 'Ubah di GitHub'
        },
    
        docFooter: {
          prev: 'Sebelumnya',
          next: 'Berikutnya'
        },
    
        outline: {
          label: 'Di Halaman Ini',
        },
    
        lastUpdated: {
          text: 'Terakhir diubah',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
    
        langMenuLabel: 'Ubah bahasa',
        returnToTopLabel: 'Kembali ke atas',
        sidebarMenuLabel: 'Navigasi sisi',
        darkModeSwitchLabel: 'Tema Gelap',
        lightModeSwitchTitle: 'Beralih ke Mode Terang',
        darkModeSwitchTitle: 'Beralih ke Mode Gelap',
      },
    }
  }
})
