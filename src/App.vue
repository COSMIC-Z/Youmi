<template>
	<div class="app">
    <Headerview/>
    <!-- 展示路由 -->
    <router-view/>
    <Bottom/>
  </div>
</template>

<script lang="ts">
//引入组件
import Headerview from './components/header.vue'
import Bottom from './components/bottom.vue'
export default {
	name:'App',
  components:{
    Headerview,
    Bottom
  }
}
</script>

<style>
.app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
