import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/jawaharsportfolio/',
  build: {
    outDir: 'dist',      // ← explicitly set output folder
    emptyOutDir: true,   // ← clean dist before each build
  },
}));