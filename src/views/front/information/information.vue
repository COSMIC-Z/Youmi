<!-- 资讯 -->

<template>
    <div class="information w1100 pb30">
        <el-breadcrumb class="breadcrumb mt20 mb20" :separator-icon="ArrowRight">
            <el-breadcrumb-item class="hover" :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资讯</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <a
            class="item"
            v-for="(item, index) in inforlist"
            :key="index"
            :href="item.href"
            >
                <div v-if="item.src" class="img"><img :src="item.src"></div>
                <div class="text">
                    <div class="title text-ellipsis text-left">{{ item.title }}</div>
                    <div class="summary">{{ item.summary }}</div>
                    <div class="date text-right">{{ item.date }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import { ArrowRight } from '@element-plus/icons-vue';
    import p1 from '@/assets/img/information/p1.jpg';
    import p2 from '@/assets/img/maker/p2.jpg';
    import p3 from '@/assets/img/maker/p3.jpg';
    import p4 from '@/assets/img/maker/p4.jpg';
    import p5 from '@/assets/img/maker/p5.jpg';

    export default {
        data () {
            return {
                ArrowRight,
                inforlist: [
                    {
                        src: p1,
                        title: "在汕头，创业见习还有这么多补贴可以申请！",
                        summary: "为进一步稳就业、促发展、惠民生，汕头市人社部门出台了一系列就业创业优惠政策。",
                        date: "2025-03-06",
                        href: "/information/subpage1",
                    },
                    {
                        src: p2,
                        title: "医药快讯 | 美迪西任命药物发现事业部执行副总裁；暂停向中国供应HPV疫苗？默沙东回应；FDA给中国药科大学发出了警告信",
                        summary: "2025 年，赛默飞世尔（Thermo Fisher）持续了几年的的裁员潮还在持续。",
                        date: "2023-03-01",
                    },
                    {
                        src: "",
                        title: "医药快讯 | 美迪西任命药物发现事业部执行副总裁；暂停向中国供应HPV疫苗？默沙东回应；FDA给中国药科大学发出了警告信",
                        summary: "2025 年，赛默飞世尔（Thermo Fisher）持续了几年的的裁员潮还在持续。",
                        date: "2023-03-01",
                    },
                ]
            }
        }
    }
</script>

<style>
    .information {
        .breadcrumb {
            font-size: 16px;
        }
        .content {
            width: 100%;
            padding: 30px 0;
            background-color: #ffffff;
            .item {
                width: 900px;
                height: 150px;
                margin: 0 auto;
                display: flex;
                padding: 20px 10px;
                border-bottom: 1px solid #cccccc;
                .img {
                    height: 100%;
                    box-shadow: 1px 1px 3px #888888;
                    margin-right: 20px;
                    img {
                        width: 250px;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .text {
                    width: 100%;
                    min-width: 0;
                    height: 100%;
                    color: #888888;
                    .title {
                        width: 100%;
                        height: 30px;
                        margin: 0px 0 0;
                        color: #333333;
                        font-size: 23px;
                        font-weight: 500;
                    }
                    .summary {
                        margin: 10px 0 0;
                    }
                    .date {
                        margin: 50px 0 0;
                    }
                }
                &:hover {
                    .title {
                        color: #ee5577;
                    }
                }
            }
        }
    }
</style>