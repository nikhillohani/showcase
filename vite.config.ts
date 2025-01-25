import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/showcase/',  // Change to match your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});