//统一管理项目用户的接口
//@ts-ignore
import request from '@/../untils/request.ts'
// import type { loginForm, loginResponseData, userResponseData } from './type.ts'
//
//统一管理登录接口
// enum API {
//   LOGIN_URL = '/user/login',
//   USERINFO_URL = '/user/info',
// }
// //对外保留请求函数
// export const reqlogin = (data: loginForm) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
// //获取用户信息
// export const reqUserInfo = () =>
//   request.get<any, userResponseData>(API.USERINFO_URL)
enum API {
  LOGIN_URL = "/admin/acl/index/login",
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

//登录接口
export const reqLogin = (data:any) =>request.post<any,any>(API.LOGIN_URL,data)
//获取用户信息的接口
export const reqUserInfo = ()=>request.get<any,any>(API.USERINFO_URL)
//退出登录
export const reqLogout = ()=> request.post<any,any>(API.LOGOUT_URL)