// Theme-specific configuration
import { getThemeConfig } from '@sugarat/theme/node'

export const blogTheme = getThemeConfig({
  themeColor: 'el-blue',
  author: 'Rasel Shikdar',

  footer: {
    copyright: 'MIT Licensed | RsLog'
  },

  friend: [
    {
      nickname: 'RsLog',
      des: 'A journal of ideas, by Rasel Shikdar',
      avatar: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://rslog.vercel.app',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  popover: {
    title: 'Announcement',
    body: [
      { type: 'text', content: '👇 Official Account 👇---👇 Telegram 👇' },
      {
        type: 'image',
        src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
      },
      { type: 'text', content: 'Feel free to join the group & DM for discussions' },
      { type: 'text', content: 'Group QR codes are shown at the beginning/end of articles', style: 'padding-top:0' },
      { type: 'button', content: 'Author Blog', link: '/' },
      {
        type: 'button',
        content: 'Join group discussion',
        props: { type: 'success' },
        link: 'https://t.me/rasel597'
      }
    ],
    duration: 0
  },

  // i18n: full English interface
  i18n: {
    friendLinks: 'Friend Links',
    tag: 'Tags',
    category: 'Category',
    categories: 'Categories',
    publishTime: 'Published',
    lastUpdated: 'Last Updated',
    wordCount: 'Word Count',
    readingTime: 'Reading Time',
    views: 'Views',
    noRelatedPosts: 'No related posts found',
    returnToTop: 'Back to Top',
    more: 'More',
    toc: 'Table of Contents',
    recommended: 'Featured Articles',
    articleList: 'Blog Posts',
    articleListTips: 'All articles are listed below',
    monthlyUpdates: 'Updates this Month',
    weeklyUpdates: 'Updates this Week',
    latestArticles: 'Latest Articles',
    latestProjects: 'Latest Projects',
    all: 'All',
    loadMore: 'Load More',
    loading: 'Loading...',
    empty: 'No content available'
  }
})
