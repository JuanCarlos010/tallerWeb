import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        'express', 
        'cors', 
        './server.js', 
        './code.js',
        'node:events',
        'node:path',
        'url',
        'fs'
      ]
    }
  },
  optimizeDeps: {
    exclude: ['express', 'cors', 'server.js', 'code.js']
  }
})