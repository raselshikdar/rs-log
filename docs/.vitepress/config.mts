import { defineConfig } from 'vitepress'

// Import the theme configuration
import { blogTheme } from './blog-theme'

// ✅ Import sitemap plugin
import { sitemap } from 'vitepress-plugin-sitemap'

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
  head: [
    // Configure the site icon (shown on browser tab)
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // If base is modified, update this too
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  vite: {
    plugins: [
      // ✅ Add sitemap plugin with hostname
      sitemap({
        hostname: 'https://rslog.rweb.site',
        transformItems: items => items.filter(i => !i.url.includes('404'))
      })
    ]
  },
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
