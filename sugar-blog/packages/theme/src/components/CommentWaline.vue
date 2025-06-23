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
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji'
    ],
    reaction: [
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/thumbs_up.png',    // 👍 Like
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/red_heart.png',     // ❤️ Love
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/face_with_tears_of_joy.png', // 😆 Haha
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/astonished_face.png', // 😲 Wow
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/crying_face.png',     // 😢 Sad
      'https://unpkg.com/@waline/emojis@1.4.0/tw-emoji/angry_face.png'       // 😠 Angry
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
