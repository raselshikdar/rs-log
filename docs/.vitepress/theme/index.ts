import BlogTheme from '../../../sugar-blog/packages/theme'
import type { Theme } from 'vitepress'
import CommentWaline from './components/CommentWaline.vue'

// 自定义样式重载
// import './style.scss'

// 自定义主题色
// import './user-theme.css'

export default BlogTheme

export const enhanceApp: Theme['enhanceApp'] = ({ app }) => {
  app.component('CommentWaline', CommentWaline)
}
