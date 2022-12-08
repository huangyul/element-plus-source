import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom', // 测试环境，如果是web端的测试，可以使用happdom或jsdom
  },
})
