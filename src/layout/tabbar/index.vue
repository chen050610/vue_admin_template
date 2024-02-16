<script setup lang="ts">
//@ts-ignore

import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!--    左侧面包屑-->
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar_right">
      <!--  右侧的静态-->
      <Setting></Setting>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
