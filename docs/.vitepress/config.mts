import { defineConfig } from 'vitepress'
import theme from './theme'

export default defineConfig({
  extends: theme,
  lang: 'en-US',
  title: 'RsLog',
  description: 'A journal of ideas, by Rasel Shikdar',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: 'Table of Contents'
    },
    returnToTopLabel: 'Back to Top',
    sidebarMenuLabel: 'Related Articles',
    lastUpdatedText: 'Last Updated',
    logo: '/logo.png',
    nav: [
      { text: 'Homepage', link: '/' },
      { text: 'About me', link: '/about.html' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/raselshikdar'
      },
      {
        icon: 'x',
        link: 'https://x.com/raselshikdar_'
      },
      {
        icon: 'facebook',
        link: 'https://facebook.com/raselshiikdar'
      }
    ]
  },
  vite: {
    ssr: {
      noExternal: ['@sugarat/theme']
    }
  }
})
