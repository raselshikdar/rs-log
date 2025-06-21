import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['@sugarat/theme']
  }
})
