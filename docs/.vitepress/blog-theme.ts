import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  footer: {
  message: '<a href="/about.html">About</a> | <a href="/contact.html">Contact</a> | <a href="/privacy.html">Privacy</a> | <a href="/terms.html">T&amp;C</a>',
  copyright: '2025 <a href="https://rasel.is-a.dev" target="_blank" rel="noopener noreferrer">Rasel Shikdar</a> | All rights reserved',
},

  themeColor: 'el-blue',

  author: 'Rasel Shikdar',

  friend: [
    {
      nickname: 'RsLog',
      des: 'A journal of ideas, by Rasel Shikdar',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://rasel.jsx.pm',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/'
    }
  ],

  // Remove or comment out the Giscus comment block to disable it:
  // comment: {
  //   type: 'giscus',
  //   options: {
  //     repo: 'raselshikdar/rs-log',
  //     repoId: 'R_kgDOO_chsA',
  //     category: 'General',
  //     categoryId: 'DIC_kwDOO_chsM4Cr2HD',
  //     inputPosition: 'top',
  //   },
  // },

  // If you have Waline, add its config here, e.g.:
  comment: {
    type: 'waline',
    options: {
      // Your Waline options here
      serverURL: 'https://your-waline-server.com',
      // other Waline configs...
    },
  },

  buttonAfterArticle: {
    openTitle: 'Support with a "Tip"',
    closeTitle: 'Maybe next time',
    content: '<img src="https://img.cdn.sugarat.top/mdImg/MTY0Nzc1NTYyOTE5Mw==647755629193">',
    icon: 'wechatPay',
  },

  popover: {
    title: 'Announcement',
    body: [
      { type: 'text', content: '👇 Official Account 👇---👇 Telegram 👇' },
      {
        type: 'image',
        src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
      },
      {
        type: 'text',
        content: 'Feel free to join the group & DM for discussions'
      },
      {
        type: 'text',
        content: 'Group QR codes are shown at the beginning/end of articles',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: 'Author Website',
        link: 'https://rasel.is-a.dev'
      },
      {
        type: 'button',
        content: 'Join group discussion',
        props: {
          type: 'success'
        },
        link: 'https://t.me/rasel597',
      }
    ],
    duration: 0
  },
})

export { blogTheme }
