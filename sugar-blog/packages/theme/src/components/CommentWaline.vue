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
    serverURL: 'https://raselverse-waline.vercel.app',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji'
    ],
    reaction: [
      // 👍 Like / Thumb Up
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_thumb_up.png',

      // ❤️ Love
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_love.png',

      // 😲 Wow
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_amazed.png',

      // 😆 Haha
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_laugh.png',

      // 😢 Crying
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_crying.png',

      // 😠 Angry
      'https://unpkg.com/@waline/emojis@1.3.0/bmoji/bmoji_angry.png'
    ],
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
