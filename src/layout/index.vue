<script setup lang="ts">
//引入左侧菜单logo
//@ts-ignore
import logo from './logo/index.vue'
//引入菜单组件
//@ts-ignore
import Menu from './menu/index.vue'
//获取用户相干的小仓库
//@ts-ignore
import useUserStore from '@/store/modules/user.ts'
//右侧内容展示组件
import Main from './main/index.vue'
//获取路由对象
import {useRoute} from "vue-router";
//@ts-ignore
import Tabbar from './tabbar/index.vue'
//@ts-ignore
import {useLayOutSettingStore} from "@/store/setting.ts";
import {toRefs} from "vue";

const layoutStore = useLayOutSettingStore();
let {fold} = toRefs(layoutStore)


let $route = useRoute()


let userStore = useUserStore()
</script>

<template>
  <div class="page_container">
    <div class="layout_cotainer">
      <!--    左侧菜单-->
      <div class="layout_slider" :class="{fold:fold? true : false}">
        <logo></logo>
        <!--      展示菜单-->
        <el-scrollbar class="scrollbar">
          <el-menu :collapse="fold ? true : false" background-color="#001529" text-color="white" active-text-color="yellowgreen" :default-active="$route.path">
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!--    顶部导航-->
      <div class="layout_tabbar" :class="{fold:fold? true : false}">
        <Tabbar></Tabbar>
      </div>
      <!-- 内容展示区域-->
      <div class="layout_main" :class="{fold:fold? true : false}">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page_container {
  width: 100%;
  height: 100vh; /* 使用视口高度作为容器高度 */
}
.layout_cotainer {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      color: white;
      .el-menu {
        border-right: none;
      }
    }
    &.fold{
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-menu-height;
    top: 0px;
    left: $base-menu-width;
    transition: 0.3s;
    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-menu-height;
    overflow: auto;
    transition: 0.3s;
    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
