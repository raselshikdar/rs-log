<template>
  <div id="waline-comment" />
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'
import { init } from '@waline/client'
// CSS is added globally via index.ts, so no CSS import here

const { isDark } = useData()
let walineInstance = null

const initWaline = () => {
  if (walineInstance) walineInstance.destroy()

  walineInstance = init({
    el: '#waline-comment',
    serverURL: 'https://raselverse-waline.vercel.app',
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
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
    reactionCDN: 'https://unpkg.com/@waline/emojis@1.1.0/qq/',
    reactionText: ['Like', 'Love', 'Haha', 'Wow', 'Sad']
  })
}

onMounted(() => {
  initWaline()
  watch(isDark, initWaline)
})

onUnmounted(() => {
  walineInstance?.destroy()
})
</script>
