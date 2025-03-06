<!-- 众创运营 -->
<template>
  <div class="operate">
    <!-- 顶部图片 -->
    <div class="nav"></div>
    <!-- 内容 -->
    <div class="container">
      <div class="b-box" v-for="(item, index) in titleList" :key="index">
        <div class="title pb10">{{ item.title }}</div>
        <div class="content" v-if="item.content">{{ item.content }}</div>
        <div class="img" v-if="item.img">
          <img
            :style="{
              width: index == 2 ? '880px' : '100%',
              height: 'auto'
            }"
            :src="item.img"
            alt=""
          />
        </div>
        <div v-else class="innovationService">
          <div
            class="service"
            v-for="(item1, index1) in item.imgList"
            :key="index1"
          >
            <div class="item-top">
              <img :src="item1.img"/>
              <span>{{ item1.title }}</span>
            </div>
            <div class="list-text" v-html="item1.text"></div>
            <!-- 蒙层 -->
            <div class="overlay">
              <button class="overlay-button" @click="goPage(item1)">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import currency_carrie_01 from "@/assets/img/operate/currency_carrie_01.png";
import currency_carrie_02 from "@/assets/img/operate/currency_carrie_02.png";
import free_site_selection from "@/assets/img/operate/free_site_selection.jpg";
import service01 from "@/assets/img/operate/service01.png";
import service02 from "@/assets/img/operate/service02.png";
import service03 from "@/assets/img/operate/service03.png";
import service04 from "@/assets/img/operate/service04.png";
import service05 from "@/assets/img/operate/service05.png";
import service06 from "@/assets/img/operate/service06.png";
import { useRouter } from "vue-router";
const router = useRouter();
const titleList = ref([
  {
    title: "一、打造特色众创空间",
    content:
      "依托有米科技的顶层规划能力、产业招商能力、企业服务能力，为创业投资者打造特色众创空间，包含创业培训室、多功能会议厅、项目汇报厅、休闲&展示区等配套设施。",
    img: currency_carrie_01
  },
  {
    title: "二、打造专业化服务平台",
    content:
      "依托成熟的体系链路、庞大的服务基数，以及专业的技术支持，为创业投资者打造专业化的服务平台，提供多样、合适、高效的贴心服务，满足创业者的不同需求。",
    img: currency_carrie_02
  },
  {
    title: "三、创业服务",
    content:
      "为创业者提供工商注册、财税、招聘、等一站式管家服务，打通创业全链条，助力创业者快速启航",
    imgList: [
      {
        img: service01,
        title: "工商注册",
        text: "提供工商注册、工商变更等<br>一站式开公司服务",
        path: "/operate/ServerDetail1"
      },
      {
        img: service02,
        title: "人才招聘",
        text: "企业高端人才猎聘<br>RPO服务<br>高竞争力团队迅速组建<br>团队培训业务",
        path: "/operate/ServerDetail2"
      },
      {
        img: service03,
        title: "代理记账",
        text: "专业会计帮你记账、税务申报<br>降低财务成本",
        path: "/operate/ServerDetail3"
      },
      {
        img: service04,
        title: "认证申报",
        text: "GMP、GSP等体系认证<br>BP商业计划书撰写<br>科技项目申报、高新企业认证",
        path: "/operate/ServerDetail4"
      },
      {
        img: service05,
        title: "知识产权",
        text: "提供全面的知识产权服务，包括专利、商标和著作权的咨询和代理服务、知识产权纠纷诉讼服务等，使企业获得“一站式”知识产权服务",
        path: "/operate/ServerDetail5"
      },
      {
        img: service06,
        title: "设计定制",
        text: "LOGO设计、名片设计、宣传册设计<br>企业网站定制服务",
        path: "/operate/ServerDetail6"
      }
    ]
  }
]);

const goPage = (option) => {
  window.scrollTo(0, 0); 
  router.push(option.path);
};
</script>

<style scoped lang="scss">
.operate {
  width: 100%;
  background-color: #f7f7f7;
  .nav {
    background-image: url("@/assets/img/operate/topBannerV3.jpg");
    width: 100%;
    height: 400px;
    background-position: center center;
    background-size: cover;
  }
  .container {
    width: 1100px;
    margin: 0 auto;
    .b-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      .title {
        margin: 40px 0;
        height: 60px;
        border-bottom: 2px solid;
        border-image: linear-gradient(to left,rgba(255,255,255,0), rgba(238,170,187,1),rgba(255,255,255,0)) 1;
        line-height: 60px;
        color: #333333;
        font-size: 30px;
        font-weight:500;
        text-align: left;
      }
      .content {
        width: 100%;  
        color: #444444;
        line-height: 30px;
        font-size: 18px;
        font-weight: 300;
        padding: 0 160px;
        margin: 0 0 30px;
        overflow: hidden;
        text-align: justify;
      }
      .img {
        width: 1100px;
        display: flex;
        margin: 0 auto;
      }
      .innovationService {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .service {
          position: relative;
          width: 268.66px;
          height: 230px;
          margin-bottom: 40px;
          padding: 16px 20px 0px 48px;
          transition: opacity 0.3s ease; /* 平滑过渡 */
          border-radius: 10px; /* 设置圆角 */
          box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2); /* 添加阴影 */
          .item-top {
            padding-top: 30px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            img {
              width: 40px;
              height: 40px;
            }
            span {
              margin-left: 20px;
              color: #333;
              font-size: 14px;
              font-weight: bold;
            }
          }
          .list-text {
            line-height: 26px;
            font-size: 15px;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(54, 54, 54, 0.7); /* 半透明黑色蒙层 */
            opacity: 0; /* 初始蒙层透明 */
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px; /* 设置圆角 */
            transition: opacity 0.3s ease;
          }
          .overlay-button {
            padding: 10px 20px;
            border: none;
            color: #ffffff;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 120px;
            background-color: #eeaabb;
            width: 120px;
            font-size: 12px;
          }
        }
        /* hover时显示蒙层 */
        .service:hover .overlay {
          opacity: 0.9;
        }
        .service:hover .item-top img {
          opacity: 0.8; /* 在hover时让图片稍微变暗 */
        }
      }
    }
  }
}
</style>
