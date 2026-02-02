<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'
import { init } from '@waline/client'

const { isDark } = useData()
let walineInstance = null

const loadWalineCSS = () => {
  if (document.getElementById('waline-style')) return
  const link = document.createElement('link')
  link.id = 'waline-style'
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/@waline/client@3.5.7/dist/waline.css'
  document.head.appendChild(link)
}

const initWaline = () => {
  if (walineInstance) walineInstance.destroy()

  walineInstance = init({
    el: '#waline-comment',
    serverURL: 'https://waline-neon.vercel.app/',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/tieba',
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili'
    ],
    reaction: true,  // ✅ Use built-in set
    lang: 'en',
    requiredMeta: ['nick', 'mail'],
    login: 'enable',
    pageview: true,
    dark: isDark.value ? 'html.dark' : false
  })
}

onMounted(() => {
  loadWalineCSS()
  initWaline()
  watch(isDark, initWaline)
})

onUnmounted(() => {
  walineInstance?.destroy()
})
</script>

<template>
  <div id="waline-comment" />
</template>
