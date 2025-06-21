import { defineConfig } from 'vitepress'
// Import the theme override instead of just blogTheme
import theme from './theme'

// If deploying on public platforms like GitHub/Gitee Pages
// Usually, you need to modify the base path, typically "/repository-name/"
// If the project name is already set to name.github.io, no changes needed!
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

export default defineConfig({
  // Use the extended theme (with client-side UI fixes)
  extends: theme,
  // base,
  lang: 'en-US',
  title: 'RsLog',
  description: 'A journal of ideas, by Rasel Shikdar',
  lastUpdated: true,
  head: [
    // Configure the site icon (shown on browser tab)
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }],
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
  }
})
