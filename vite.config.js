import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-pdf-case-insensitive',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathname = req.url.split('?')[0].toLowerCase();
          if (pathname === '/bounten-flyer.pdf') {
            req.url = '/bounten-flyer.pdf';
          } else if (pathname === '/bounten-broucher.pdf' || pathname === '/bounten-brochure.pdf') {
            req.url = '/bounten-brochure.pdf';
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false,
  },
});

