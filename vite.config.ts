import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Puerto para desarrollo
  },
  preview: {
    port: 3001, // Puerto para modo de previsualización
  },
})