import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ // Generate .d.ts files from .vue files
      insertTypesEntry: true // Generate main.d.ts file in the root folder
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "OziocbViteComponentLibrary",
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
