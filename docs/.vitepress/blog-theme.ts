import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  footer: {
  copyright: '2025 Rasel Shikdar | All rights reserved',
  message: `
    <a href="/about.html" title="About Us" aria-label="About Us">About</a> • 
    <a href="/contact.html" title="Contact Us" aria-label="Contact Us">Contact</a> • 
    <a href="/privacy.html" title="Privacy Policy" aria-label="Privacy Policy">Privacy</a> • 
    <a href="/terms.html" title="Terms and Conditions" aria-label="Terms and Conditions">Terms</a>
  `,
},

  themeColor: 'el-blue',

  author: 'Rasel Shikdar',

  friend: [
    {
      nickname: 'RsLog',
      des: 'A journal of ideas, by Rasel Shikdar',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://rasel.jsx.pm',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/'
    }
  ],

  // Remove or comment out the Giscus comment block to disable it:
  // comment: {
  //   type: 'giscus',
  //   options: {
  //     repo: 'raselshikdar/rs-log',
  //     repoId: 'R_kgDOO_chsA',
  //     category: 'General',
  //     categoryId: 'DIC_kwDOO_chsM4Cr2HD',
  //     inputPosition: 'top',
  //   },
  // },

  // If you have Waline, add its config here, e.g.:
  comment: {
    type: 'waline',
    options: {
      // Your Waline options here
      serverURL: 'https://your-waline-server.com',
      // other Waline configs...
    },
  },

  buttonAfterArticle: {
    openTitle: 'Support with a "Tip"',
    closeTitle: 'Maybe next time',
    content: '<img src="https://raw.githubusercontent.com/raselshikdar/rs-log/refs/heads/main/docs/public/btc-wallet.png">',
    icon: 'wechatPay',
  },

  popover: {
    title: 'Announcement',
    body: [
      { type: 'text', content: 'Official Account 👇' },
      {
        type: 'image',
        src: 'https://raw.githubusercontent.com/raselshikdar/rs-log/refs/heads/main/docs/public/qr-code.png'
      },
      {
        type: 'text',
        content: 'Visit my personal website'
      },
      {
        type: 'text',
        content: 'Feel free to text me',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: 'Website',
        link: 'https://rasel.is-a.dev'
      },
      {
        type: 'button',
        content: 'Telegram',
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
