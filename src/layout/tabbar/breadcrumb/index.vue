<script setup lang="ts">
//@ts-ignore
import {useLayOutSettingStore} from "@/store/setting.ts";
import {ArrowRight} from "@element-plus/icons-vue";
import {toRefs} from "vue";
//@ts-ignore
import {useRoute} from "vue-router";


const $route = useRoute()
const layoutStore = useLayOutSettingStore();
let {fold} = toRefs(layoutStore)
const changeIcon = ()=>{
  fold.value= !fold.value
}

</script>

<template>
  <!--    顶部左侧的静态-->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="fold? 'Fold': 'Expand'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
<!--    需要动态展示路由的标题-->
    <el-breadcrumb-item v-for="(item,,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <el-icon style="vertical-align: middle">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span  style="margin: 0px 5px;">{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>