<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, watch, onBeforeUnmount } from 'vue'
import { useColorMode } from '@vueuse/core'

const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'
const colorMode = useColorMode()

let walineInstance = null

// Helper: initialize Waline
function initWaline(theme = 'light') {
  if (!window.Waline) return

  if (walineInstance && walineInstance.destroy) {
    walineInstance.destroy()
  }

  walineInstance = window.Waline({
    el: '#waline-comment',
    serverURL: 'https://raselverse-waline.vercel.app',
    lang: 'en',
    reaction: true,
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
    requiredMeta: ['nick', 'mail'],
    login: 'enable',
    pageview: true,
    dark: theme === 'dark' ? 'html.dark' : false
  })
}

// Load Waline script once
function loadWalineScript() {
  return new Promise((resolve) => {
    if (window.Waline) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src = WALINE_SCRIPT
      script.onload = resolve
      document.head.appendChild(script)
    }
  })
}

onMounted(async () => {
  await loadWalineScript()
  initWaline(colorMode.value)

  watch(colorMode, (mode) => {
    initWaline(mode)
  })
})

onBeforeUnmount(() => {
  if (walineInstance && walineInstance.destroy) {
    walineInstance.destroy()
  }
})
</script>

<style scoped>
/* Optional: minimal styling if needed */
</style>
