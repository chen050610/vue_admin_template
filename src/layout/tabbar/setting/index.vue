<script setup lang="ts">
//@ts-ignore
import { useLayOutSettingStore } from '@/store/setting.ts'
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue'
//@ts-ignore
import useUserStore from '@/store/modules/user.ts'
import {useRouter,useRoute} from 'vue-router'
let $router = useRouter();
let $route = useRoute()
let userStore = useUserStore()
let layoutStore = useLayOutSettingStore()
const changeState = () => {
  layoutStore.refsh = !layoutStore.refsh
}
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    //切换成全屏
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 退出登陆的回调
const logout = ()=>{
  //第一次事情：向服务器说明不要token
  //仓库中关于用户的东西需要清除掉
  //第三件跳转到登录
  userStore.userLogout();
  $router.push({path:'/login',query:{redirect: $route.path}})
}
</script>


<template>
  <el-button
    size="small"
    :icon="Refresh"
    circle
    @click="changeState"
  ></el-button>
  <el-button
    size="small"
    :icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" :icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px"
  />
  <!--    下拉菜单-->
  <el-dropdown>
    <el-button>
      {{ userStore.username }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
