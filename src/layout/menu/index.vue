<script setup lang="ts">
import {useRouter} from "vue-router";
defineProps(['menuList'])
let $router= useRouter()

//点击以后路由跳转的回调
const goRouter = (vc)=>{
  $router.push(vc.index)
}

</script>

<template>
<div>
  <template v-for="(item,index) in menuList" :key="item.path">
<!--    没有子路由-->
    <template v-if="!item.children">
      <el-menu-item  :index="item.path" v-if="!item.meta.hidden" @click="goRouter">
        <el-icon>
          <!--            这可以通过名字使用vue组件-->
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{item.meta.title}}</span>
        </template>
      </el-menu-item>
    </template>
<!--    只有一个子路由-->
    <template  v-if="item.children && item.children.length == 1">
  <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path" @click="goRouter">
    <el-icon>
      <component :is="item.children[0].meta.icon"></component>
    </el-icon>
    <template #title>
      <span>{{item.children[0].meta.title}}</span>
    </template>
  </el-menu-item>
</template>
<!--    有子路由且大于一个-->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length>1">
      <template #title>
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        <span>{{item.meta.title}}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</div>
</template>


<script lang="ts">
export default {
  name:'Menu'
}

</script>

<style scoped lang="scss">

</style>