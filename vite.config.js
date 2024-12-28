import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Here you can add specific configuration for alias if you have any
   resolve: {
    alias: {
      '@': '/src',
    },
  },
})