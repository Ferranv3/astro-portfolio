import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

export default defineConfig({
  site: 'https://ferrranhpv3.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  prefetch: true,
  output: "server",
  adapter: vercel(),
  vite: {
    ssr: {
      external: ["@sparticuz/chromium", "playwright-core"],
    },
    build: {
      rollupOptions: {
        external: ["@sparticuz/chromium", "playwright-core"],
      },
    },
  }
});