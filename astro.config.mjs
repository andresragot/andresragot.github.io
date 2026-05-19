import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andresragot.github.io',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
