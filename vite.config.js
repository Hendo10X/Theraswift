import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        port: 4000
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      // Add other dependencies you want to include explicitly
    ],
  },
build: {
    rollupOptions: {
      input: 'src/master.jsx', // Use this path as the entry point
    },
  },
})
