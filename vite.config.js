/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  base: './',
  
})
