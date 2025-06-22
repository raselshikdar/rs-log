<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { useColorMode } from '@vueuse/core'

const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'
const colorMode = useColorMode()
let walineInstance = null
const el = '#waline-comment'

function initWaline(theme) {
  if (!window.Waline) return
  // Destroy previous instance if any
  if (walineInstance && walineInstance.destroy) {
    walineInstance.destroy()
  }
  walineInstance = window.Waline({
    el,
    serverURL: 'https://raselverse-waline.vercel.app',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
    reaction: true,
    lang: 'en',
    requiredMeta: ['nick', 'mail'],
    login: 'enable',
    pageview: true,
    dark: theme, // 'auto', 'dark', 'light' or false
  })
}

function loadScript() {
  return new Promise((resolve) => {
    if (window.Waline) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = WALINE_SCRIPT
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  await loadScript()
  const theme = colorMode.value === 'dark' ? 'auto' : false
  initWaline(theme)

  watch(colorMode, (newMode) => {
    const newTheme = newMode === 'dark' ? 'auto' : false
    initWaline(newTheme)
  })
})

onBeforeUnmount(() => {
  if (walineInstance && walineInstance.destroy) {
    walineInstance.destroy()
  }
})
</script>

<style scoped>
/* optional: custom styles */
</style>
