<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted } from 'vue'

// Import Waline script from CDN or npm package (if installed)
const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'

onMounted(() => {
  if (!window.Waline) {
    const script = document.createElement('script')
    script.src = WALINE_SCRIPT
    script.onload = () => {
      window.Waline({
        el: '#waline-comment',
        serverURL: 'https://raselverse-waline.vercel.app', // Change this URL to your Waline server
        emoji: [
          'https://unpkg.com/@waline/emojis@1.1.0/weibo',
          'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
          'https://unpkg.com/@waline/emojis@1.1.0/tieba'
        ],
        reaction: true,
        lang: 'en',
        requiredMeta: ['nick', 'mail'],
        login: 'enable',
        pageview: true
      })
    }
    document.head.appendChild(script)
  } else {
    // If Waline already loaded, just init again
    window.Waline({
      el: '#waline-comment',
      serverURL: 'https://raselverse-waline.vercel.app', // Your server URL here
      emoji: [
        'https://unpkg.com/@waline/emojis@1.1.0/weibo',
        'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
        'https://unpkg.com/@waline/emojis@1.1.0/tieba'
      ],
      reaction: true,
      lang: 'en',
      requiredMeta: ['nick', 'mail'],
      login: 'enable',
      pageview: true
    })
  }
})
</script>

<style scoped>
/* You can add Waline styling overrides here if needed */
</style>
