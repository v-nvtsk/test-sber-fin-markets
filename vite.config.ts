import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: { "import.meta.env.VITE_BASE_URL": JSON.stringify(
    process.env.CI ? "/test-sber-fin-markets/" : "/",
  ) },
  base: process.env.CI ? "/test-sber-fin-markets/" : "/",
  build: {
    outDir: "dist",
  },
  plugins: [
    react(),
  ],
  server: {
    allowedHosts: true,
  },
});
