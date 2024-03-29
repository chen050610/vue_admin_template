import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs'
//@ts-ignore
import App from '@/App.vue'
//svg
import 'virtual:svg-icons-register'
//@ts-ignore
import SvgIcon from '@/components/SvgIcon/index.vue'
import '@/styles/index.scss'
//注册路由
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.component('SvgIcon', SvgIcon)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#app')

//引入自定义插件对象；注册整个项目的全局组件
// import gloalComponent from '@/components'
// app.use(gloalComponent)
//
// console.log(gloalComponent)
