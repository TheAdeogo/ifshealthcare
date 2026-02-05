import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This allows the app to read the API_KEY you set in Vercel
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});