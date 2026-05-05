import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'ui': ['./src/components/Hero', './src/components/Navbar', './src/components/Pricing']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  }
})
