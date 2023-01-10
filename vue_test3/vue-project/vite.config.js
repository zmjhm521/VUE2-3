import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 开启代理服务器(方式一)
  // server: {
  //   proxy: {
  //     // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/students': 'http://localhost:5000',      
  //   }
  // }
  // 开启代理服务器(方式二)
  server: {
    proxy: {
      '/xuesheng': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/xuesheng/, ''),
      },
      '/api':{
        target:'http://localhost:5001',
        // changeOrigin 用于请求控制请求头中的host值
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
