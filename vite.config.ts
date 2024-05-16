import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/assets',
      '@components': '/src/components',
      '@ui': '/src/ui',
      '@libs/utils': '/src/utils/cn.ts',
    },
  },
});
