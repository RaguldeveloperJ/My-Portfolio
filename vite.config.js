import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', 
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) {
            return 'react-vendors'
          }
          if (id.includes('node_modules/emailjs-com')) {
            return 'emailjs'
          }
        }
      }
    }
  }
})
