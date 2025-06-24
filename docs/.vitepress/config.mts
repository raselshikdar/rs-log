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
  title: 'Rasel Shikdar',
  description: 'A journal of ideas, by Rasel Shikdar',
  lastUpdated: true,
  // See: https://vitepress.dev/zh/reference/site-config#head
publicDir: 'docs/public', // ✅ This line ensures sitemap.xml is copied to output
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
    logo: '/logo.webp',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: 'Edit this page on GitHub'
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
{
  text: "Projects",
  items: [
    { text: "Open Source Contributions", link: "/products/github" },
    { text: "Work Projects", link: "/products/works" },
  ]
},
{
  text: "Interview",
  link: "/blogs/interview/index"
},
{
  text: "Nodes",
  items: [
    { text: "Nestjs", link: "/blogs/node/nest" },
  ]
}
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
    ],
    comment: {
      type: 'giscus',
      options: {
        repo: 'raselshikdar/rs-log',
        repoId: 'R_kgDOO_chsA',
        category: 'General',
        categoryId: 'DIC_kwDOO_chsM4Cr2HD',
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'en',
        reactionsEnabled: true,
        theme: 'preferred_color_scheme'
      }
    },

    // 👇 ADDED blog config with formatShowDate
    blog: {
      formatShowDate: (date: string) => {
        const source = +new Date(new Date(date).toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))
        const now = +new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))
        const diff = now - source

        const oneSecond = 1000
        const oneMinute = oneSecond * 60
        const oneHour = oneMinute * 60
        const oneDay = oneHour * 24
        const oneWeek = oneDay * 7

        if (diff < 10) return ' just now'
        if (diff < oneMinute) return `${Math.floor(diff / oneSecond)} seconds ago`
        if (diff < oneHour) return `${Math.floor(diff / oneMinute)} minutes ago`
        if (diff < oneDay) return `${Math.floor(diff / oneHour)} hours ago`
        if (diff < oneWeek) return `${Math.floor(diff / oneDay)} days ago`

        const localDate = new Date(new Date(date).toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))
        return localDate.toISOString().slice(0, 10) // e.g., 2025-06-23
      }
    }
  }
})
