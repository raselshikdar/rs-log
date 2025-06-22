import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  footer: {
    copyright: 'MIT Licensed | RsLog',
  },

  themeColor: 'el-blue',

  // Default author of articles
  author: 'Rasel Shikdar',

  // Friend links - only one friend link kept
  friend: [
    {
      nickname: 'RsLog',
      des: 'A journal of ideas, by Rasel Shikdar',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://rslog.vercel.app',
    },
  ],

  // Comment system configuration using Giscus
  comment: {
    type: 'giscus',
    options: {
      repo: 'raselshikdar/rs-log',
      repoId: 'R_kgDOO_chsA',
      category: 'General',
      categoryId: 'DIC_kwDOO_chsM4Cr2HD',
      inputPosition: 'top',
    },
  },

  // Appreciation button configuration
  buttonAfterArticle: {
    openTitle: 'Support with a "Tip"',
    closeTitle: 'Maybe next time',
    content: '<img src="https://img.cdn.sugarat.top/mdImg/MTY0Nzc1NTYyOTE5Mw==647755629193">',
    icon: 'wechatPay',
  },

  // Announcement popover configuration
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
        content: 'Author Blog',
        link: '/'
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
