import { defineConfig ,loadEnv} from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { UserConfigExport, ConfigEnv } from 'vite'

export default defineConfig(({ command,mode }) => {
  //获取各中环境下的对应的变量
  let env = loadEnv(mode,process.cwd());//mode时环境，process时是获取index.html的目录
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    //代理跨域
    server:{
      proxy:{
        [env.VITE_APP_BASE_API]:{
          target: env.VITE_SERVE,//获取地址服务器设置
          changeOrigin: true,//需要代理跨域
          rewrite: (path) => path.replace(/^\/api/, ''),//路径重写
        }
      }
    }
  }
})
