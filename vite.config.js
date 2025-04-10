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
    outDir: 'dist',
    minify: 'terser', // Use terser for better minification
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit
    // Optimize CSS
    cssCodeSplit: true,
    // Enable source maps for debugging in development only
    sourcemap: process.env.NODE_ENV === 'development'
  }
}) 