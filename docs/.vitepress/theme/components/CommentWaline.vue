<script setup>
import { init } from '@waline/client'
import '@waline/client/style'
import { onMounted } from 'vue'

onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://raselverse-waline.vercel.app', // your actual server
    lang: 'en',
    reaction: true,
    emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo',
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/tieba'
    ],
    requiredMeta: ['name', 'email'],
    login: 'enable',
    pageview: true
  })
})
</script>

<template>
  <div id="waline" style="margin-top: 2rem;"></div>
</template>
