// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/WorldKnowldge_React_Project/', // 👈 Important!
  plugins: [react()],
});
