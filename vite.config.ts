import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Keep SVG files as real URLs so `<use href="…#tech">` works (data: URLs cannot).
  build: {
    assetsInlineLimit: 0,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      sass: {
        // Allows `@use 'src/consts'` from component stylesheets
        loadPaths: ['.'],
        silenceDeprecations: ['global-builtin', 'slash-div', 'import'],
      },
    },
  },
})
