<!-- 代理记账 -->
<template>
  <div class="operate">
    <!-- 顶部图片 -->
    <div class="nav"></div>
    <!-- 二级导航 -->
    <operateHeader title="代理记账" />
    <!-- 内容 -->
    <div class="container">
      <p style="margin-bottom: 50px;">
        <span style="color: #333333; font-family: ffdin, Arial, sans-serif"
          ><span style="font-size: 15px; background-color: rgb(255, 255, 255)"
            ><strong>我们的服务包括</strong></span
          ></span
        >
      </p>
      <ul style="list-style-type: disc" >
        <li>
          <p>建账、记账、制作报表，网上纳税申报（小规模、一般纳税人）；</p>
        </li>
        <li>
          <p>整理错账、清理乱账，建立建全财务制度，合理节税；<br /></p>
        </li>
        <li><p>工商年检；</p></li>
        <li><p>财务人员培训；</p></li>
        <li>
          <p>
            出纳服务,包括现金支付程序、现金账簿保管、员工费用报销和现金预算；
          </p>
        </li>
        <li><p>开具发票；</p></li>
        <li>
          <p>全部账务由具有会计师职称的会计人员为您提供专业的账务处理。</p>
        </li>
      </ul>
      <img src="../../assets/img/operate/jz/jz01.jpg" alt="" />
      <img src="../../assets/img/operate/jz/jz02.jpg" alt="" />
      <img src="../../assets/img/operate/jz/jz03.png" alt="" />
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
    ul {
      li{
        margin-bottom: 10px;
      }
    }
  }
}
</style>
