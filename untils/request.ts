//进行二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
//
import useUserStore from '../src/store/modules/user'
//获取用户相关的小仓库；获取仓库里面额token，登陆成功以后携带给服务器

///第一步，利用axios对象的create的方法，去创建axios的实例

let request = axios.create({
  //@ts-ignore
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000, //超时的时间
})
//第二部，添加请求和响应拦截器
request.interceptors.request.use((config) => {
  //返回配置对象
  //携带公共的参数
  //config有一个headers的属性就是响应头，经常给服务器端携带公共参数
  let userStore = useUserStore()
  if (userStore.token) {
    config.headers.token = userStore.token //在请求的时候，如果仓库里面有token的话，就会携带token在请求头
  }
  return config
})

//第三步配置响应拦截器
request.interceptors.response.use(
  (response: any): any => {
    //成功的回调，简化数据
    return response.data //简化数据
    console.log(response.data)
  },
  (error: any) => {
    //失败的回调：处理http网络错误
    //定义一个变量；存储网络错误信息
    let message = ''
    //错误的http状态码
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期了'
        break
      case 403:
        message = '无权限'
        break
      case 404:
        message = '请求地址出错'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络发生了错误'
        break
    }

    //这是elementui里面提示错误信息的ui
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)
export default request
