<script setup>
import { onMounted } from 'vue'
import { init } from '@waline/client'
import '@waline/client/dist/waline.css'

const walineOptions = {
  el: '#waline-comment',
  serverURL: 'https://raselverse-waline.vercel.app', // your actual server URL
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
}

onMounted(() => {
  init(walineOptions)
})
</script>

<template>
  <div id="waline-comment" class="waline-wrapper" />
</template>

<style scoped>
.waline-wrapper {
  margin-top: 2rem;
}
</style>
