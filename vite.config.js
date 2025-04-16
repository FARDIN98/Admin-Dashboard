import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// Vite configuration for fast development and optimized production builds
export default defineConfig({
  plugins: [vue()], // Vue 3 plugin for Single-File Component support
})
