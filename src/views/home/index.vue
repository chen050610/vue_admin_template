<script setup lang="ts">
import {onMounted} from "vue";
//@ts-ignore
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore();
onMounted(()=>{
  //首页挂载完毕请求获取用户信息
  userStore.userInfo()
})

</script>

<template>
  <div>
    <h1>我是一级路由登录成功以后进入的界面</h1>
  </div>
</template>

<style scoped lang="scss"></style>
