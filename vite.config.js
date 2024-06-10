import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Repair-It/",
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
