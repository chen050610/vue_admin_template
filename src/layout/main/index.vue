<script setup lang="ts">

</script>

<template>
<!--  路由组件的出口-->
  <router-view v-slot="{ Component }">
    <transition name="fade">
<!--      渲染layout以一级组件的子路由-->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}




</style>