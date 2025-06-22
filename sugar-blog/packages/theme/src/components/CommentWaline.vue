<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, watch, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'
let walineInstance = null

const initWaline = () => {
  // Clear previous instance if exists
  if (walineInstance) {
    walineInstance.destroy()
  }

  // Create new instance with reactions enabled
  walineInstance = window.Waline({
    el: '#waline-comment',
    serverURL: 'https://raselverse-waline.vercel.app',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
    // Enhanced reaction configuration
    reaction: [
      'https://unpkg.com/@waline/emojis@1.1.0/qq/点赞.gif',
      'https://unpkg.com/@waline/emojis@1.1.0/qq/喜欢.gif',
      'https://unpkg.com/@waline/emojis@1.1.0/qq/大笑.gif',
      'https://unpkg.com/@waline/emojis@1.1.0/qq/惊讶.gif',
      'https://unpkg.com/@waline/emojis@1.1.0/qq/流泪.gif'
    ],
    lang: 'en',
    requiredMeta: ['nick', 'mail'],
    login: 'enable',
    pageview: true,
    dark: isDark.value ? 'html.dark' : false,
    // Optional: Add more reaction customization
    reactionCDN: 'https://unpkg.com/@waline/emojis@1.1.0/qq/',
    reactionText: ['Like', 'Love', 'Haha', 'Wow', 'Sad']
  })
}

onMounted(() => {
  if (!window.Waline) {
    const script = document.createElement('script')
    script.src = WALINE_SCRIPT
    script.onload = () => initWaline()
    script.onerror = () => console.error('Failed to load Waline script')
    document.head.appendChild(script)
  } else {
    initWaline()
  }

  // Watch for theme changes
  watch(isDark, () => {
    initWaline()
  })
})

// Clean up on component unmount
onUnmounted(() => {
  if (walineInstance) {
    walineInstance.destroy()
  }
})
</script>

<style scoped>
#waline-comment {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Custom reaction styles */
:root {
  --waline-reaction-width: 2.5rem;
  --waline-reaction-height: 2.5rem;
  --waline-reaction-line-height: 1.25rem;
}

.dark {
  --waline-reaction-bg: rgba(255, 255, 255, 0.1);
  --waline-reaction-active-bg: rgba(255, 255, 255, 0.2);
}
</style>
