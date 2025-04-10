import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if we're building for GitHub Pages or other platforms
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  // Only apply the base path for GitHub Pages, not for Netlify/Vercel
  base: isGitHubPages ? '/spendsync-website/' : '/',
  build: {
    outDir: 'dist'
  }
}) 