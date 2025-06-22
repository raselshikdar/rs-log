<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const WALINE_SCRIPT = 'https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js'

let walineInstance = null

const initWaline = () => {
  const container = document.getElementById('waline-comment')
  if (container) container.innerHTML = ''

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
    dark: isDark.value ? 'html.dark' : false
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

  watch(isDark, () => {
    initWaline()
  })
})
</script>

<style scoped>
#waline-comment {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
