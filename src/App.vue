<template>
  <Headerview/>
  <div class="app">
    <!-- 展示路由 -->
    <router-view/>
  </div>
  <Bottom/>
</template>

<!-- export default ({
  name: 'App',
}); -->

<script>
  import Headerview from '@/components/front/header.vue';
  import Bottom from '@/components/front/bottom.vue';

  export default {
      components: {
          Headerview,
          Bottom
      },
  };
</script>

<style>
  @import "@/assets/css/main.css";
  @import "@/assets/css/common.css";
.app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
