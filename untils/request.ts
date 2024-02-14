//进行二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
///第一步，利用axios对象的create的方法，去创建axios的实例
let request = axios.create({
  //@ts-ignore
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000, //超时的时间
})
//第二部，添加请求和响应拦截器
request.interceptors.request.use((config) => {
  //返回配置对象
  console.log(config)
  //携带公共的参数
  config.headers.token = '123'
  //config有一个headers的属性就是响应头，经常给服务器端携带公共参数
  return config
})

//第三步配置响应拦截器
request.interceptors.response.use(
  (response: any): any => {
    //成功的回调，简化数据
    return response.data //简化数据
    console.log(response)
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
