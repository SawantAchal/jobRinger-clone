import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build files are placed in the 'dist' folder
    rollupOptions: {
      input: 'index.html', // Ensure Vite knows where the entry point is
    }
  },
})
