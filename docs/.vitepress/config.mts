import { defineConfig } from 'vitepress'

// Import the theme configuration with i18n fixes
import { blogTheme } from './blog-theme'

export default defineConfig({
  extends: blogTheme,
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
        link: 'https://x.com/raselshiikdar'
      }
    ],
    // ✅ UI translations for @sugarat/theme
    i18n: {
      friendLinks: 'Friend Links',
      tag: 'Tags',
      category: 'Categories',
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
  }
})
