<script setup>
import { init } from '@waline/client'
import '@waline/client/style'
import { onMounted, watch } from 'vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

let walineInstance = null

onMounted(() => {
  walineInstance = init({
    el: '#waline',
    serverURL: 'https://waline-neon.vercel.app/',
    lang: 'en',
    reaction: true,
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
    requiredMeta: ['name', 'email'],
    login: 'enable',
    pageview: true,
    dark: colorMode.value === 'dark' ? 'dark' : 'light'  // initial theme
  })

  watch(colorMode, (newMode) => {
    if (walineInstance && walineInstance.updateTheme) {
      walineInstance.updateTheme(newMode === 'dark' ? 'dark' : 'light')
    }
  })
})
</script>

<template>
  <div id="waline" style="margin-top: 2rem;"></div>
</template>
