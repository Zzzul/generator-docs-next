import { defineConfig } from 'vitepress'

export const META_URL = 'https://zzzul.github.io/generator-docs-next/'
export const META_TITLE = 'CRUD Generator 📦'
export const META_DESCRIPTION = 'Automate CRUD, Focus on Core Features'

export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { property: 'image', content: 'https://zzzul.github.io/generator-docs-next/crud-generator-image-complete.png' }],
    ['meta', { itemprop: 'image', content: 'https://zzzul.github.io/generator-docs-next/crud-generator-image-complete.png' }],
    ['meta', { name: 'og:url', content: META_URL }],
    ['meta', { name: 'og:description', content: META_DESCRIPTION }],
    ['meta', { name: 'og:image', content: 'https://zzzul.github.io/generator-docs-next/android-icon-192x192.png' }],
    ['meta', { name: 'twitter:url', content: META_URL }],
    ['meta', { name: 'twitter:title', content: META_TITLE }],
    ['meta', { name: 'twitter:description', content: META_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: 'https://zzzul.github.io/generator-docs-next/android-icon-192x192.png' }],
    ['link', { rel: 'icon', href: 'https://zzzul.github.io/generator-docs-next/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://zzzul.github.io/generator-docs-next/apple-icon-180x180.png' }],
    ['link', { rel: 'shortcut icon', href: 'https://zzzul.github.io/generator-docs-next/favicon.ico' }],
  ],
  base: '/generator-docs-next/',
  editLink: {
    pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
  },
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    logo: '/crud-generator-image-complete.png',
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
      title: " ",
      head: [
        ['title', { Text: 'CRUD Generator 📦' }],
      ],
      description: "CRUD for Laravel",
      label: 'English',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Zzzul/generator-docs-next/edit/main/docs/:path'
        },
        nav: [
          {
            text: '🔖 Version',
            items: [
              { text: '🍉 0.4 (Latest)', link: '/' },
              { text: '⚡ 0.3', link: '/0.3.x' },
              { text: '🔒 0.2', link: '/0.2.3/' },
            ]
          },
          {
            text: '🍉 0.4',
            items: [
              { text: 'Changelog', link: 'https://github.com/Evdigi-INA/generator/releases' },
              { text: 'Contributing', link: '/contributions' },
            ]
          },
          {
            text: 'Free Palestine 🇵🇸',
            link: '/free-palestine'
          }
        ],
        sidebar: [
          {
            text: '🍉 0.4 (Latest)',
            items: [
              {
                text: 'Prologue 🎉',
                collapsed: false,
                items: [
                  { text: 'Introduction 👋', link: '/introduction' },
                  { text: 'Upgrade Guide 🏗️', link: '/upgrade-guide' },
                  { text: 'Contribution Guide 🛂', link: '/contributions' },
                ]
              },
              {
                text: 'Getting Started 🚀',
                collapsed: false,
                items: [
                  { text: 'Installation 🌱', link: '/installation' },
                  { text: 'Usage ✨', link: '/usage' },
                  { text: 'Features 🎨', link: '/features' },
                ]
              },
              { text: 'Supports ☕', link: '/sponsors' },
              { text: 'Free Palestine 🇵🇸', link: '/free-palestine' }
            ]
          },
          {
            text: '⚡ 0.3',
            collapsed: true,
            items: [
              { text: 'Introduction 👋', link: '/0.3.x/introduction' },
              { text: 'Get Started 🎬', link: '/0.3.x/get-started' },
              { text: 'Usage 👀', link: '/0.3.x/usage' },
              { text: 'Features 🕹', link: '/0.3.x/features' },
              { text: 'Upgrade Guide 📢', link: '/0.3.x/upgrade-guide' },
              { text: 'Contributions 🛠', link: '/0.3.x/contributions' },
              { text: 'Supports ☕', link: '/0.3.x/sponsors' },
              // { text: 'To Do', link: '/todo' }
            ]
          },
          {
            text: '🔒 0.2',
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
          copyright: 'Copyright © 2021-Now <a href="https://github.com/Zzzul">Mohammad Zulfahmi</a> & Evdigi-INA, "php generator" logo by <a href="https://rachmad.dev">Rachmad Nur Hayat</a>'
        }
      },
    },
    id: {
      title: " ",
      head: [
        ['title', { Text: 'CRUD Generator 📦' }],
      ],
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
              { text: '🍉 0.4 (Terbaru)', link: '/id/' },
              { text: '⚡ 0.3', link: '/id/0.3.x/' },
              { text: '🔒 0.2', link: '/id/0.2.3/' },
            ]
          },
          {
            text: '🍉 0.4',
            items: [
              { text: 'Perubahan', link: 'https://github.com/Evdigi-INA/generator/releases' },
              { text: 'Cara berkontribusi', link: '/id/contributions' },
            ]
          }
        ],
        sidebar: [
           {
            text: '🍉 0.4 (Terbaru)',
            items: [
              {
                text: 'Prolog 🎉',
                collapsed: false,
                items: [
                  { text: 'Pengenalan 👋', link: '/id/introduction' },
                  { text: 'Pembaruan 🏗️', link: '/id/upgrade-guide' },
                  { text: 'Cara Berkontribusi 🛂', link: '/id/contributions' },
                ]
              },
              {
                text: 'Mari Kita Mulai 🚀',
                collapsed: false,
                items: [
                  { text: 'Instalasi 🌱', link: '/id/installation' },
                  { text: 'Cara Pemakaian ✨', link: '/id/usage' },
                  { text: 'Fitur 🎨', link: '/id/features' },
                ]
              },
              { text: 'Dukungan ☕', link: '/id/sponsors' },
              { text: 'Free Palestine 🇵🇸', link: '/id/free-palestine' }
            ]
          },

          {
            text: '⚡  0.3',
            collapsed: true,
            items: [
              { text: 'Pengenalan 👋', link: '/id/0.3.x/introduction' },
              { text: 'Mari Kita Mulai 🎬', link: '/id/0.3.x/get-started' },
              { text: 'Cara Pemakaian 👀', link: '/id/0.3.x/usage' },
              { text: 'Fitur yang Tersedia 🕹', link: '/id/0.3.x/features' },
              { text: 'Pembaruan 📢', link: '/id/0.3.x/upgrade-guide' },
              { text: 'Kontribusi 🛠', link: '/id/0.3.x/contributions' },
              { text: 'Dukungan ☕', link: '/id/0.3.x/sponsors' },
              // { text: 'Daftar Rencana', link: '/id/todo' }
            ]
          },
          {
            text: '🔒 0.2',
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
          copyright: 'Hak cipta © 2021-Sekarang <a href="https://github.com/Zzzul">Mohammad Zulfahmi</a> & Evdigi-INA, "php generator" logo oleh <a href="https://rachmad.dev">Rachmad Nur Hayat</a>'
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
  },
  titleTemplate: ':title - CRUD Generator',
})
