import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/generator-docs-next/',
  editLink: {
    pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
  },
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    i18nRouting: true,
    ignoreDeadLinks: true,
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

    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
    editLink: {
      pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
    }
  },

  locales: {
    root: {
      title: "Generator",
      description: "CRUD for Laravel",
      label: 'English',
      // lang: 'en',
      // link: '/',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
        },
        nav: [
          {
            text: '🔖 Version',
            items: [
              { text: '⚡ 0.3.x (Latest)', link: '/' },
              { text: '🔒 0.2.3', link: '/0.2.3/' },
            ]
          }
        ],

        sidebar: [
          {
            text: '⚡  Latest (0.3.x)',
            items: [
              { text: 'Introduction 👋', link: '/introduction' },
              { text: 'Get Started 🎬', link: '/get-started' },
              { text: 'Usage 👀', link: '/usage' },
              { text: 'Features 🕹', link: '/features' },
              { text: 'Upgrade Guide 📢', link: '/upgrade-guide' },
              { text: 'Contributions 🛠', link: '/contributions' },
              { text: 'Supports ☕', link: '/sponsors' },
              // { text: 'To Do', link: '/todo' }
            ]
          },
          {
            text: '🔒 0.2.3',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/0.2.3/' },
              { text: 'Getting Started', link: '/0.2.3/getting-started' },
              { text: 'Features', link: '/0.2.3/features' },
              { text: 'Usage', link: '/0.2.3/usage' },
              { text: 'How To Contribute', link: '/0.2.3/how-to-contribute' },
              { text: 'Sponsors/Support', link: '/0.2.3/sponsors' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Evdigi-INA/generator' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2021-present Mohammad Zulfahmi & Evdigi-INA, "kawaii" logo by https://github.com/SAWARATSUKI/KawaiiLogos'
        }
      },
    },
    id: {
      title: "Generator",
      description: "CRUD untuk Laravel",
      label: 'Indonesia',
      // link: '/id/', 
      // lang: 'id', 
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
        },
        nav: [
          {
            text: '🔖 Versi',
            items: [
              { text: '⚡ 0.3.x (Terbaru)', link: '/id/' },
              { text: '🔒 0.2.3', link: '/id/0.2.3/' },
            ]
          }
        ],
        sidebar: [
          {
            text: '⚡  0.3.x (Terbaru)',
            items: [
              { text: 'Pengenalan 👋', link: '/id/introduction' },
              { text: 'Mari Kita Mulai 🎬', link: '/id/get-started' },
              { text: 'Cara Pemakaian 👀', link: '/id/usage' },
              { text: 'Fitur yang Tersedia 🕹', link: '/id/features' },
              { text: 'Pembaruan 📢', link: '/id/upgrade-guide' },
              { text: 'Kontribusi 🛠', link: '/id/contributions' },
              { text: 'Dukungan ☕', link: '/id/sponsors' },
              // { text: 'Daftar Rencana', link: '/id/todo' }
            ]
          },
          {
            text: '🔒 0.2.3',
            collapsed: true,
            items: [
              { text: 'Pengenalan', link: '/id/0.2.3/' },
              { text: 'Mari Mulai', link: '/id/0.2.3/getting-started' },
              { text: 'Fitur', link: '/id/0.2.3/features' },
              { text: 'Pemakaian', link: '/id/0.2.3/usage' },
              { text: 'Kontribusi', link: '/id/0.2.3/how-to-contribute' },
              { text: 'Dukungan', link: '/id/0.2.3/sponsors' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Evdigi-INA/generator' }
        ],
        footer: {
          message: 'Dirilis dibawah lisensi MIT.',
          copyright: 'Hak cipta © 2021-sekarang Mohammad Zulfahmi & Evdigi-INA, "kawaii" logo oleh https://github.com/SAWARATSUKI/KawaiiLogos'
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
