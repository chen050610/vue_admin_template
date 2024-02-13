<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default:'#icon-'
  },
  name:String
})
</script>

<template>
  <svg>
    <!--    容器-->
    <!--    需要与use联合使用-->
    <use :xlink:href="prefix+name"></use>
  </svg>
</template>

<style scoped lang="scss">

</style>