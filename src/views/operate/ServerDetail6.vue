<!-- 设计定制 -->
<template>
  <div class="operate">
    <!-- 顶部图片 -->
    <div class="nav"></div>
    <!-- 二级导航 -->
    <operateHeader title="设计定制" />
    <!-- 内容 -->
    <div class="container">
      <img src="../../assets/img/operate/sjdz/sjdz01.jpg" alt="" />
      <img src="../../assets/img/operate/sjdz/sjdz02.jpg" alt="" />
      <img src="../../assets/img/operate/sjdz/sjdz03.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import operateHeader from "@/components/operateHeader.vue";
</script>

<style scoped lang="scss">
.operate {
  width: 100%;
  background-color: #f7f7f7;
  .nav {
    background-image: url("../../assets/img/operate/topBannerV3.jpg");
    width: 100%;
    height: 330px;
    background-position: center center;
    background-size: cover;
  }
  .container {
    width: 1000px;
    // height: 400px;
    margin: 0 auto;
    padding-top: 80px;
  }
}
</style>
