<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
//引入仓具
//@ts-ignore
import useUserStore from '@/store/modules/user.ts'
import { ElMessage, ElNotification } from 'element-plus'
import { gettime } from '../../../untils/time.ts'
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()

let loginForms = ref()
//定义变量控制加载效果
let loading = ref(false)
//收集表单数据
let loginForm = reactive({
  username: '',
  password: '',
  createTime: "2024-02-16T08:47:25.855Z",
  id: 0,
  name: "string",
  phone: "string",
  roleName: "string",
  updateTime: "2024-02-16T08:47:25.855Z",
})
//登录按钮的回调
const login = async () => {
  //保证全部表单相校验再通过验证在发送请求
  await loginForms.value.validate()
  loading.value = true //开始加载
  //通知仓库发送登录请求仓库是pinia
  //请求成功==》首页展示数据
  //请求失败=》弹出登录失败的信息
  // let result = userStore.useLogin(loginForm);
  try {
    await userStore.useLogin(loginForm)
    //编程式导航,跳转到首页
    // 判断路径是否有参数
    let redirect :any= $route.query.redirect
    $router.push({path:redirect || '/'})
    //登录提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${gettime()}好`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    //登录失败的提示信息1
    ElMessage({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

//定义表单校验的配置对象
const rules = {
  //规则属性的说明；required,代表这个这段需要检查//blur是失去焦点
  username: [
    // {require:true,message:'用户名不能为空',trigger:'blur'},
    {
      required: true,
      min: 5,
      max: 10,
      message: '账号长度不少于五位',
      trigger: 'blur',
    },
  ], //blur是失去焦点
  password: [
    {
      required: true,
      min: 6,
      max: 15,
      message: '密码长度至少六位',
      trigger: 'blur',
    },
  ],
}

//获取组件元素使用ref
</script>

<template>
  <div class="page_container">
    <div class="login_container">
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
          <el-form
            class="login_form"
            :model="loginForm"
            :rules="rules"
            ref="loginForms"
          >
            <h1>Hello</h1>
            <h2>欢迎来到晨甄选</h2>
            <el-form-item prop="username">
              <el-input
                v-model="loginForm.username"
                :prefix-icon="User"
                :type="'text'"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                :prefix-icon="Lock"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="login_btn"
                type="primary"
                size="default"
                @click="login"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page_container {
  width: 100%;
  height: 100vh; /* 使用视口高度作为容器高度 */
}

.login_container {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png');
  background-size: cover;
  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    font-size: 20px;
    color: white;
    margin: 20px 0px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
