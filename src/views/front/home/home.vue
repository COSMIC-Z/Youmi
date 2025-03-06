<!-- 首页 -->

<template>
  <div class="homeview">
    <div class="banner">
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
            <swiper-slide>
                <video src="https://cdn.ameiyan.cn/trailer_20211229.mp4" controls autoplay loop muted></video>
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/home/slideImg1.jpg" alt="Slide 1">
            </swiper-slide>
        </swiper>
    </div>
    <div class="title w1100">
        <div class="line"></div>
        <div class="main-title">核心业务介绍</div>
    </div>
    <div class="introduce w1100">
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core1.png">
            <div class="item-content">
                <div class="item-title">6类咨询服务</div>
                <div class="item-info">专业&落地</div>
            </div>
        </a>
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core2.png">
            <div class="item-content">
                <div class="item-title">招商六大服务包</div>
                <div class="item-info">招商伙伴</div>
            </div>
        </a>
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core3.png">
            <div class="item-content">
                <div class="item-title">众创运营服务</div>
                <div class="item-info">破局创新</div>
            </div>
        </a>
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core4.png">
            <div class="item-content">
                <div class="item-title">产业培训服务</div>
                <div class="item-info">专业领航</div>
            </div>
        </a>
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core5.png">
            <div class="item-content">
                <div class="item-title">企业定制培训服务</div>
                <div class="item-info">成你所想</div>
            </div>
        </a>
        <a class="item" href="/home/intro1">
            <img src="@/assets/img/home/business_core6.png">
            <div class="item-content">
                <div class="item-title">会议活动服务</div>
                <div class="item-info">以会兴产</div>
            </div>
        </a>
    </div>
    <div class="introduce-content">
        <div class="process w1100">
            <h1>以数字化方式提供产业咨询、招商落地、生态运营服务</h1>
            <div class="img">
                <img src="@/assets/img/home/section0-img.png">
            </div>
            <p>
                以产业研究为基石，项目落地为抓手，服务运营为目标，构建 “咨询 + 招商 + 运营” 的业务体系，<br>提供研究咨询、招商服务、园区运营的全方位产业组织工作支撑。
            </p>
        </div>
    </div>
    <div class="title">
        <div class="line"></div>
        <div class="main-title">服务对象</div>
    </div>
    <div class="service w1100">
        <ul>
            <li>
                <img src="@/assets/img/home/schema_server01.png">
                <b>各级政府</b>
                <div>
                    <span>产业规划</span>
                    <span>招商策划</span>
                    <span>招商代理</span>
                    <span>产业基金</span>
                    <span>产业投资</span>
                </div>
            </li>
            <li>
                <img src="@/assets/img/home/schema_server02.png">
                <b>产业地产商</b>
                <div>
                    <span>拿地策划</span>
                    <span>规划定位</span>
                    <span>IP创建</span>
                    <span>产业导入</span>
                    <span>招商代理</span>
                    <span>运营管理</span>   
                </div>
            </li>
            <li>
                <img src="@/assets/img/home/schema_server03.png">
                <b>产业投资者</b>
                <div>
                    <span>项目评估</span>
                    <span>项目选址</span>
                    <span>策划定位</span>
                    <span>规划设计</span>
                    <span>实施规划</span>
                    <span>资源导入</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="title">
        <div class="line"></div>
        <div class="main-title">服务流程</div>
    </div>
    <div class="service-process">
        <div class="w1100">
            <div class="content-stage">
                <b>合作沟通流程</b>
                <img src="@/assets/img/home/lc1.jpg">
            </div>
        </div>
        <div class="w1100">
            <div class="content-stage">
                <b>项目运作流程</b>
                <img src="@/assets/img/home/lc2.jpg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { Navigation, Pagination, A11y } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
            console.log(swiper);
            };
            const onSlideChange = () => {
            console.log('slide change');
            };
            return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, A11y],
            };
        },
    };
</script>
    
<style>
.banner {
    height: 400px;
    width: 100%;
    min-width: 1100px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .swiper{
    --swiper-theme-color: #ffffff;
        img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        video {
            width: 100%;
            height: 400px;
            background-color: #000000;
            object-fit: contain;
        }
    }
}

.introduce {
    height: 400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
        width: 310px;
        height: 100px;
        background: #fff;
        margin-bottom: 43px;
        border-radius: 10px;
        border: 2px solid transparent;
        padding: 45px 20px 0 20px;
        display: flex;
        transition: box-shadow 0.3s ease;
        img {
            width: 40px;
            height: 40px;
            margin-right: 20px
        }
        .item-title {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 10px;
        }
        .item-info {
            color: #a0a0a0;
        }
        &:hover {
            box-shadow: 0 5px 30px #eeaabb;
        }
    }
}

.introduce-content {
    width: 100%;
    height: 500px;
    background: url(@/assets/img/home/section0-bg.png) no-repeat center center;
    background-size: cover;
}

.process {
    display: flex;
    flex-direction: column;
    text-align: center; 
    h1 {
        margin: 0;
        padding: 50px;
        color: #ffffff;
    }
    .img {
        width: 100%;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
    p {
        width: 100%;
        height: 80%;
        margin: 30px 0 ;
        padding: 30px 80px 30px;
        line-height: 40px;
        color:#eeeeee;
        box-sizing: border-box;
        border: 3px solid #eeaabb;
        border-radius: 10px;
    }
}

.service {
    ul {
        padding: 0;
        display: flex;
    }
    li {
        width: 265px;
        background: #fff;
        margin: 0 50px;
        padding: 30px;
        text-align: center;
        border: 3px solid #eeaabb;
        border-radius: 6px;
        img {
            width: 48px;
            display: inline-block;
        }
        b {
            display: block;
            text-align: center;
            margin-top: 30px;
            margin-bottom: 30px;
            color: #444444;
            font-size: 18px;
        }
        span {
            display: inline-block;
            background: #f3f5f8;
            color: #444444;
            border-radius: 2px;
            margin-left: 4px;
            margin-right: 2px;
            margin-bottom: 10px;
            padding: 4px 0px;
            width: 82px;
            text-align: center;
        }
    }
}

.service-process {
    width: 100%;
    background-color: #fff;
    .content-stage {
        padding: 20px 0;
        img {
            margin-top: 20px;
        }
    }
}
</style>