import { defineConfig } from 'vite'
import * as path from 'path'
import legacy from '@vitejs/plugin-legacy'
import Banner from 'vite-plugin-banner'
import {banner,name,version,homepage,author} from './package.json'
export default defineConfig({
  plugins:[
    legacy({
      targets: ["> 1%", "last 4 versions", "not dead"]
    }),
    Banner(` banner\n name: ${name};version: ${version};author: ${author};homepage:${homepage};`)
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'Fetcher',
      formats:['umd','es'],
      fileName: (format) => `Fetcher.${format}.js`
    }
  }
})
