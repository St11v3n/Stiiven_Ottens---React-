import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Stiiven_Ottens---React-/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  }
})
