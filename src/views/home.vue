#file:d:\COSMIC\vue\Youmi\src\views\home.vue
home.vue
<!-- 首页 -->

<template>
  <div class="homeview">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/slideImg1.jpg" alt="Slide 1">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/slideImg2.jpg" alt="Slide 2">
        </swiper-slide>
      </swiper>
    </div>
    <div class="introduce">
        <div class="title">

        </div>
        <div class="content">
            <div class="item">

            </div>
            <div class="item">

            </div>
            <div class="item">

            </div>
            <div class="item">

            </div>
            <div class="item">

            </div>
            <div class="item">

            </div>
        </div>
    </div>
    <div class="item">
        <div class="process">
            <h1>以数字化方式提供产业咨询、招商落地、生态运营服务</h1>
            <div class="img">
                <img src="../assets/section0-img.png">
            </div>
            <p>
                以产业研究为基石，项目落地为抓手，服务运营为目标，构建 “咨询 + 招商 + 运营” 的业务体系，提供研究咨询、招商服务、园区运营的全方位产业组织工作支撑。
            </p>
        </div>
    </div>
    <div>
      <!-- 其他内容 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
    }
  }
}
</script>

<style>
.banner {
  height: 400px;
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.introduce {
  height: 400px;
  width: 1100px;
  margin: auto;
  background-color: green;
}

.introduce .title {
  height: 10%;
  width: 100%;
  background-color: red;
}

.introduce .content {
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: blue;
}

.introduce .content .item {
    height: 40%;
    width: 350px;
    background-color: #8f4f4f;
}

.item {
    width: 100%;
    height: 500px;
    background-color: #2d4097;
}

.process {
    width: 1100px;
    height: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center; /* 确保文本水平居中 */
}

.process h1 {
    margin: 0;
    padding: 50px;
    color: #ebebeb;
}

.process .img {
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
}

.process .img img {
    width: 100%;
    height: auto;
    object-fit: contain;
}

.process p {
    width: 100%;
    height: 80%;
    margin: 30px 0 ;
    padding: 30px 80px 30px;
    line-height: 40px;
    color: #ebebeb;
    box-sizing: border-box;
    border: 1px solid rgb(247, 197, 34);
    border-radius: 10px;
}
</style>