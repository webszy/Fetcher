import { defineConfig } from 'vite'
import * as path from 'path'
import Banner from 'vite-plugin-banner'
import {version,homepage,author,description} from './package.json'
export default defineConfig({
  plugins:[
    Banner(`
 _______  _______ .___________.  ______  __    __   _______ .______      
|   ____||   ____||           | /      ||  |  |  | |   ____||   _  \\     
|  |__   |  |__   \`---|  |----\`|  ,----'|  |__|  | |  |__   |  |_)  |    
|   __|  |   __|      |  |     |  |     |   __   | |   __|  |      /     
|  |     |  |____     |  |     |  \`----.|  |  |  | |  |____ |  |\\  \\----.
|__|     |_______|    |__|      \\______||__|  |__| |_______|| _| \`._____|
 name: Fetcher;
 description:${description};
 version: ${version};
 author: ${author};
 homepage:${homepage};\n`
    )
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
