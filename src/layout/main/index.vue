<script setup lang="ts">
//@ts-ignore
import { useLayOutSettingStore } from '@/store/setting.ts'
import { watch, ref, nextTick } from 'vue'
const layoutStore = useLayOutSettingStore()
let flag = ref(true)
watch(
  () => layoutStore.refsh,
  () => {
    //刷新就是销毁重建组件
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<template>
  <!--  路由组件的出口-->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--      渲染layout以一级组件的子路由-->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
