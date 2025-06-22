<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useColorMode } from '@vueuse/core'

const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'
const colorMode = useColorMode()

let walineInstance = null

function initWaline() {
  if (!window.Waline) return

  walineInstance = window.Waline({
    el: '#waline-comment',
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
    dark: colorMode.value === 'dark' ? 'auto' : 'light'  // use 'auto' for dark mode support
  })
}

onMounted(() => {
  if (!window.Waline) {
    const script = document.createElement('script')
    script.src = WALINE_SCRIPT
    script.onload = () => {
      initWaline()
    }
    document.head.appendChild(script)
  } else {
    initWaline()
  }

  watch(colorMode, (newMode) => {
    if (walineInstance?.updateTheme) {
      walineInstance.updateTheme(newMode === 'dark' ? 'auto' : 'light')
    }
  })
})
</script>

<style scoped>
/* Add any Waline-specific styling overrides here */
</style>
