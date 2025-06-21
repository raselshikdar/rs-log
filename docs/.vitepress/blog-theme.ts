// Theme-specific configuration
import { getThemeConfig } from '@sugarat/theme/node'

// Enable RSS support (RSS configuration)
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: 'Sugar in the Porridge',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, Sugar in the Porridge',
//   description: 'The power to change the world is at your fingertips (Front-end tech sharing)',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// All configuration options, see docs: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // Enable RSS support
  // RSS,

  // Search
  // Pagefind offline full-text search is enabled by default (set to false if using another solution)
  // search: false,

  // Markdown chart support (adds some build time)
  // mermaid: true

  // Footer
  footer: {
    // The message field supports HTML content. Use an array to configure multiple lines.
    // message: 'The content and icons below can all be customized (this message too)',
    copyright: 'MIT Licensed | RsLog',
    // icpRecord: {
    //   name: 'Sichuan ICP No. 19011724',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: 'Public Security Registration xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // Theme color customization
  themeColor: 'el-blue',

  // Default author of articles
  author: 'Rasel Shikdar',

  // Friend links
  friend: [
    {
      nickname: 'RsLog',
      des: 'A journal of ideas, by Rasel Shikdar',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://rslog.vercel.app',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // Announcement
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
