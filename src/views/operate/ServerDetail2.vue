<!-- 人才招聘 -->
<template>
  <div class="operate">
    <!-- 顶部图片 -->
    <div class="nav"></div>
    <!-- 二级导航 -->
    <operateHeader title="人才招聘" />
    <!-- 内容 -->
    <div class="container">
      <div>
        <p>&nbsp; &nbsp; &nbsp; <strong>&nbsp;服务内容：</strong></p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp;1.专业医药猎头企业高端人才猎聘</p>
        <p>
          &nbsp; &nbsp; &nbsp;
          &nbsp;2.RPO服务，招聘流程外包：从确定职位描述，到分析用人理念、职位需求、与用人部门负责人沟通，筛选简历，人才测评，面试到录用通知，直至候选人报到的所有环节的一站式服务
        </p>
        <p>&nbsp; &nbsp; &nbsp; &nbsp;3.高竞争力团队迅速组建到位</p>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;4.团队培训业务 &nbsp; &nbsp; &nbsp;&nbsp;
        </p>
        <p>&nbsp; &nbsp; &nbsp;</p>

        <h2
          style="
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            line-height: 41px;
            font-size: 14px;
            color: rgb(103, 55, 141);
            white-space: normal;
            background-color: rgb(255, 255, 255);
            text-align: justify;
            text-indent: 2em;
            height: auto !important;
          "
        >
          人才招聘的优势：
        </h2>
        <p class="p-style">
          <strong style="box-sizing: border-box">专业&nbsp;</strong
          >我们致力于医药、器械、化工、医院、生物诊断等行业咨询认证服务，我们的医药猎头顾问均具有相关行业10年以上工作经验，大都是硕士以上学历，能够准确结合客户企业发展阶段与现状来匹配最适合人才；
        </p>
        <p class="p-style">
          <br />
        </p>
        <p class="p-style">
          <strong style="box-sizing: border-box">高效</strong
          >&nbsp;擅长运作高端岗位，对高端岗位的筛选、匹配有科学严谨的工具和非常丰富的实战经验，能够确保速度与质量，同时还可为企业HR省去很多沟通时间和麻烦；
        </p>
        <p class="p-style">
          <br />
        </p>
        <p class="p-style">
          <strong style="box-sizing: border-box">创新型合作模式</strong
          >&nbsp;为扶持创业型、快速成长型企业的发展，可采取“低现金加股权”的特殊合作形式，为客户提供猎取高管人才、组建团队、项目立项、政策咨询、销售渠道拓展、引荐潜在客户和投资基金等服务，以促进客户企业快速发展。
        </p>
        <p class="p-style">
          服务到位
          跟踪上岗，对到岗后“空降兵”如何落地有深入研究和一系列的解决方案，对民营企业文化特性的理解，有丰富、独特的经验。
        </p>
        <p class="p-style">
          <br />
        </p>
        <p class="p-style">
          <strong style="box-sizing: border-box">丰富的人才库&nbsp;</strong
          >通过多年猎头服务，我们已经积累了丰富的人才资源，同时我们同国内著名高校管理人才培训机构建立了联系，拥有各类高端人才的信息；另外与全国各地研发企业、生产企业及销售经营企业及业内同行建立了良好互动平台；
        </p>
        <p class="p-style">
          <br />
        </p>
        <p class="p-style">
          <strong style="box-sizing: border-box">保密</strong
          >&nbsp;我们恪守对企业、对人才保密负责的态度，采用前期“双盲沟通交流”确保企业与人才信息安全；
        </p>
        <p class="p-style">
          <br />
        </p>
        <p class="p-style">
          <strong style="box-sizing: border-box">友好合作&nbsp;</strong
          >本着长期合作、友情合作的原则，我公司对部分普通人才免费提供。
        </p>
      </div>
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
    padding-bottom: 30px;
    p {
      line-height: 26px;
    }
    .p-style {
      box-sizing: border-box;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 0px;
      color: rgb(35, 35, 35);
      white-space: normal;
      background-color: rgb(255, 255, 255);
      text-align: justify;
      text-indent: 2em;
    }
  }
}
</style>
