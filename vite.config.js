import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BASE_URL } from './src/Constants'

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL,
  plugins: [react()]
})
