import BlogTheme from '@sugarat/theme'
import type { Theme } from 'vitepress'

const CustomTheme: Theme = {
  ...BlogTheme,
  enhanceApp(ctx) {
    BlogTheme?.enhanceApp?.(ctx)

    ctx.app.mixin({
      mounted() {
        const translations: Record<string, string> = {
          '小时前': 'hours ago',
          '配置': 'Config',
          '个字': 'words',
          '分钟': 'min',
          '博客文章': 'Blog Posts',
          '本月更新': 'Monthly Updates',
          '本周更新': 'Weekly Updates',
          '精选文章': 'Featured Articles',
          '友情链接': 'Friend Links',
          '标签': 'Tags'
        }

        const replaceText = () => {
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
          while (walker.nextNode()) {
            const node = walker.currentNode
            const original = node.nodeValue?.trim()
            if (original && translations[original]) {
              node.nodeValue = translations[original]
            }
          }
        }

        setTimeout(replaceText, 500)
      }
    })
  }
}

export default CustomTheme
