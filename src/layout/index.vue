<script setup lang="ts">
//引入左侧菜单logo
//@ts-ignore
import  logo from "./logo/index.vue"
//引入菜单组件
//@ts-ignore
import Menu from "./menu/index.vue"
//获取用户相干的小仓库
//@ts-ignore
import useUserStore from "@/store/modules/user.ts";
 //右侧内容展示组件
import Main from './main/index.vue'


let userStore = useUserStore();
</script>

<template>
<div class="page_container">
  <div class="layout_cotainer">
<!--    左侧菜单-->
    <div class="layout_slider">
      <logo></logo>
<!--      展示菜单-->
      <el-scrollbar class="scrollbar">
       <el-menu background-color="#001529"  text-color="white">
         <Menu :menuList="userStore.menuRoutes" ></Menu>
       </el-menu>
      </el-scrollbar>
    </div>
<!--    顶部导航-->
    <div class="layout_tabbar"></div>
    <!-- 内容展示区域-->
    <div class="layout_main">
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
.layout_cotainer{
  width: 100%;
  height: 100vh;
  background-color: red;
  .layout_slider{
    width:$base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar{
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      color: white;
      .el-menu{
        border-right: none;
      }
    }
  }
  .layout_tabbar{
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-menu-height ;
    background-color: cyan;
    top: 0px;
    left:$base-menu-width;
  }
  .layout_main{
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-menu-height;
    overflow: auto ;
  }
}
</style>