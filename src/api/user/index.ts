//统一管理项目用户的接口
//@ts-ignore
import request from '@/../untils/request.ts'
import type { loginForm, loginResponseData, userResponseData } from './type.ts'

//统一管理登录接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
//对外保留请求函数
export const reqlogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
