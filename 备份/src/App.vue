<script setup lang="ts">
// import request from '../untils/request.ts'
//@ts-ignore
import { reqlogin } from '@/api/user'
import { onMounted } from 'vue'
// onMounted(() => {
//   request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111',
//     },
//   }).then((res) => {
//     console.log(res)
//   })
// })
onMounted(() => {
  reqlogin({ username: 'admin', password: '111111' })
})
</script>

<template>
  <h1>hahah</h1>
  <svg-icon name="home" />
  <div>
    <h1>测试axios二次封装</h1>
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
