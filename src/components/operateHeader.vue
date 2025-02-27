<!-- 二级导航 -->
<template>
  <div class="navigation">
    <div class="left">
      <span
        ><a href="/home" class="herfLink">首页</a
        ><span>&nbsp;/&nbsp;</span></span
      >
      <span
        ><a href="/operate" class="herfLink">园区服务</a
        ><span>&nbsp;/&nbsp;</span></span
      >
      <span>创业服务<span>&nbsp;/&nbsp;</span></span>
      <span>{{ props.title }}</span>
    </div>
    <div class="right">
      <div class="right-menu">
        <router-link to="/operate/ServerDetail1" active-class="active"
          >工商注册</router-link
        >
        <router-link to="/operate/ServerDetail2" active-class="active"
          >人才招聘</router-link
        >
        <router-link to="/operate/ServerDetail3" active-class="active"
          >代理记账</router-link
        >
        <router-link to="/operate/ServerDetail4" active-class="active"
          >认证申报</router-link
        >
        <router-link to="/operate/ServerDetail5" active-class="active"
          >知识产权</router-link
        >
        <router-link to="/operate/ServerDetail6" active-class="active"
          >设计定制</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,defineComponent } from "vue";
defineComponent({name: "OperateHeader",})

const props = defineProps<{
  title: String;
  
}>()
</script>

<style lang="scss" scoped>
.navigation {
  width: 100vw;
  height: 60px;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
  .left {
    // width: 204.7px;
    // height: 60px;
    font-size: 12px;
    span {
      a {
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-transition: all 0.3sease;
        -moz-transition: all 0.3s ease;
        color: #666;
        transition: all 0.3sease;
        cursor: pointer;
      }
      a:hover {
        color: #ff7200; /* 当鼠标悬停在链接上时，文本颜色变为红色 */
      }
    }
  }
  .right {
    width: 425.81px;
    // background-color: aqua;
    height: 60px;
    display: flex;
    align-items: end;
    .right-menu {
      height: 38px;
      display: flex;
      flex-wrap: nowrap;
      float: left;
      align-items: flex-end;
      justify-content: center;
      a {
        width: 50px;
        height: 38px;
        font-size: 12px;
        color: #666;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid rgb(255, 255, 255);
        margin-right: 16px;
        &.active {
          border-bottom: 2px solid rgb(63, 111, 216);
        }
      }
    }
  }
}
</style>
