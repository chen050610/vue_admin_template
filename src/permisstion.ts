//路由鉴权，项目路由什么条件下可以访问
import router from "./router";
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
import setting from "./setting.ts";
import pinia from "./store";
import useUserStore from "./store/modules/user.ts";
//全局守卫：项目中任意路由切换都会引起
//全局的前置守卫 到路由前
let userStore = useUserStore(pinia);//获取是否有token，判断有没有登录

//@ts-ignore
router.beforeEach(async (to, from, next)=>{
    nprogress.start();
    let token = userStore.token
    let username = userStore.username
    if (token){
        if (to.path == '/login'){next({path:'/'})} else {
            //如果有用户信息放行
            if (username){next()}else{
                // 没有的放松请求
                try {
                    await userStore.userInfo()
                    next()
                } catch (error){
                    //token过期
                    //用户手动改修改了本地的token
                    userStore.userLogout()//退出的登录清空数据
                    next({path:'/login'})
                }
            }
        }
    }
    else {
        if(to.path == '/login'){next();} else {next({path:'/login',query:{redirect:to.path}})}//如果未登录，可以访问login，访问其他的直接指向/login
    }

})




//全局的后置守卫 到路由以后
//@ts-ignore
router.afterEach((to, from, failure)=>{
    document.title = `${setting.title}-${to.meta.title}`//左上角的标题
    nprogress.done()

})


//用户未登录：可以访问login，其他的六个路由你能够访问指向login
//用户登录成功不能访问login其余的都能访问