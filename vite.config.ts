import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import typescript from '@rollup/plugin-typescript'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    // typescript({
    //   // include: ["./src/components/*.vue"],
    //   exclude: ["vite.config.ts"],
    //   compilerOptions: {
    //     outDir: "dist/elo",
    //     declaration: true,
    //     declarationMap: true,
    //   }
    // })
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
