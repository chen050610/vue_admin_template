//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqUserInfo,reqLogout } from '../../api/user'
//引入类类型

import type { UserState } from './types/type.ts'
//导入本地存储
import { SET_TOKEN, GET_TOKEN,REMOVE_TOKEN } from '../../../untils/token.ts'
//引入路由
import { constantRoute } from '../../router/routes.ts'



let useUserStore = defineStore('User', {
  //小仓库存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库生成菜单需要的数组（路由）
      username: '',
      avatar: '',
    }
  },
  //处理异步逻辑的地方
  actions: {
    async useLogin(data: any) {
      //登录请求
      const result:any = await reqLogin(data)
      console.log(result)
      //登陆成功：成功200-》token
      //登录请求：失败201-》登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储token,炫耀持久化存储，这个pinia只是对象的存储不是持久的
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok' //函数返回一个成功发promise
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    //获取用户信息
    async userInfo() {
      //获取用户信息存储
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return  'ok'
      } else {
        return  Promise.reject('获取用户信息失败')
      }
    },
    //退出登录
    userLogout(){
      //目前没有推虎登录的接口
      this.token = ''
      this.username=''
      this.avatar=''
      REMOVE_TOKEN();

    }
  },
  getters: {},
})

export default useUserStore
