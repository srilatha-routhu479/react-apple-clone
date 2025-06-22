// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:process.env.VITE_BASE_PATH || "/react-vite-apple/", // 👈 Use your repo name here!
  plugins: [react()],
});
