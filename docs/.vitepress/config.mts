import { defineConfig } from 'vitepress'

// Import the theme configuration
import { blogTheme } from './blog-theme'

// If deploying on public platforms like GitHub/Gitee Pages
// Usually, you need to modify the base path, typically "/repository-name/"
// If the project name is already set to name.github.io, no changes needed!
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// VitePress default configuration
// See docs: https://vitepress.dev/reference/site-config
export default defineConfig({
  // Extend the blog theme (@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'en-US',
  title: 'RsLog',
  description: 'A journal of ideas, by Rasel Shikdar',
  lastUpdated: true,
  // See: https://vitepress.dev/zh/reference/site-config#head
  head: [
    // Configure the site icon (shown on browser tab)
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // If base is modified, update this too
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // Show level 2 and 3 headers in the outline
    outline: {
      level: [2, 3],
      label: 'Table of Contents'
    },
    // Default text labels
    returnToTopLabel: 'Back to Top',
    sidebarMenuLabel: 'Related Articles',
    lastUpdatedText: 'Last Updated',

    // Set logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: 'Edit this page on GitHub'
    // },
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
        link: 'https://x.com/raselshiikdar'
      }
    ]
  }
})
