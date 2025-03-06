<!-- 众创空间 -->

<template>
    <div class="maker w1100">
        <div
        class="maker-item"
        v-for="(item, index) in makerlist"
        :key="index"
        @click="toggleDialog(index)"
        >
            <dl>
                <dt class="pull-left">
                    <img :src="item.img">
                </dt>
                <dd>
                    <h3 class="mt20 text-ellipsis">{{ item.title }}</h3>
                    <p class="mt15 pb10 adrs">
                        <img src="@/assets/img/maker/adrs.png">
                        {{ item.adrs }}
                    </p>
                    <p class="mt20">
                        <img src="@/assets/img/maker/area.png">
                        {{ item.area }}
                    </p>
                </dd>
            </dl>
            <el-dialog
            class="maker-content"
            v-model="dialogVisible[index]"
            :title="item.title"
            >
            <img :src="item.img">
            <p><br>{{ item.content1 }}<br><br>{{ item.content2 }}</p>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import p1 from '@/assets/img/maker/p1.jpg';
    import p2 from '@/assets/img/maker/p2.jpg';
    import p3 from '@/assets/img/maker/p3.jpg';
    import p4 from '@/assets/img/maker/p4.jpg';
    import p5 from '@/assets/img/maker/p5.jpg';

    export default {
        data () {
            return {
            dialogVisible: [],
            makerlist: [
                {   
                    img: p1,
                    title: "潮创智谷众创空间",
                    adrs: "汕头市龙湖区",
                    area: "8000平米",
                    content1: "潮创智谷产业园位于汕头市龙湖区，建筑总面积近8000平方米。自2018年2月开园以来，累计孵化创业团队及初创企业超过120家，累计带动就业人数超过600人，获得知识产权超600项，企业类型涵盖了智能制造、互联网、电子商务、文化传媒等主要产业，具有较强的市场存活能力及创新能力。其中，孵化企业以智美科技、腾安网络等为代表取得国家级高新技术企业认定，协助智美科技、好吃妹、腾安网络等一批初创企业累计获得800多万元投融资。",
                    content2: "潮创智谷是全业态、全要素的创业创新集合体，致力于成为独具特色、功能完善的创 新性项目孵化器乃至具有全国影响力的国际创新众创中心。集合四大空间为一身，即包括众创空间（创客空间、智造工坊、休闲体验、会议中心）、智创空间（智库 平台、创客学院、创客视界）、研创空间（创新中心、研发中心）及资创空间（资本蜂巢、服务中心）。",
                },
                {   
                    img: p2,
                    title: "汕头大学学生创业园",
                    adrs: "汕头市金平区",
                    area: "2500平米",
                    content1: "汕头大学创业学院构建了“创新创业教育——创新创业实践——孵化企业”的完整培育链，为大学生提供全方位的创新创业服务，包括创业场所、咨询、辅导、市场开发、人才推荐和项目论证等。目前学院已建成2500多平方米的创业孵化基地，并聘请了41名企业家与专家担任创业导师，其中2名入选教育部首批全国万名优秀创新创业导师人才库，2名被科技部认定为中国创业导师。学院在创新创业教育方面成绩显著，被教育部认定为“全国深化创新创业教育改革示范高校”和“全国创新创业典型经验高校50强”，同时被广东省教育厅认定为“广东省大学生创新创业教育示范学校”。学生创业园也获得了多项荣誉，包括科技部认定的“国家级众创空间”、广东省人社厅认定的“广东省创业孵化示范基地”、广东省经信委认定的“广东省小型微型企业创业创新示范基地”以及汕头市科技局认定的“市级科技企业孵化器”。",
                    content2: "在孵化成果方面，汕头大学创业学院共孵化了39家企业，其中5家被认定为国家高新技术企业。这些创业企业累计获得风险投资4200多万元，并在各级创业比赛中斩获106个奖项，包括4项国际级、12项国家级、68项省级和22项市级奖项。这些成就充分展示了汕头大学创业学院在推动创新创业教育、实践和企业孵化方面的卓越成效。",
                },
                {   
                    img: p3,
                    title: "OAO众创空间",
                    adrs: "汕头市高新区",
                    area: "2000平米",
                    content1: "基地拥有办公场地2015平方米，配套有创业培训室、摄影棚、多媒体教室、创业卡座、洽谈室、会议厅、项目演示厅、服务器机房等创业服务设施。可孵化100个创业团队，拥有专业创业导师5名及丰富的创业导师库资源，累计孵化企业超过80家，创业带动就业超过300人，其中拥有核心知识产权的科技研发型企业超过40家，科澜动漫、篮球教学技巧自媒体等项目，参加2016年度省级创业赛事获得奖项。",
                    content2: "本着“以人为本、扶持创业”的宗旨，为入驻基地的创业者提供创业空间及完善的配套设施、开展创业指导、技能培训、证照办理、培育孵化、融资对接等创业服务，并协助办理创业补贴、房租补贴、就业补贴、贷款担保、贷款贴息等多项服务，助推创业项目快速成长。重点孵化软件外包及开发、先进工业设计与研发、人工智能等高新技术项目以及文化创意设计电子商务、动漫开发与数字媒体与设计制作等项目。基地从起步到发展，通过不断探索实践，致力于基地创业项目的培育和建设，已发展成为汕头有志青年创新创业的公共服务平台，实现青年创新创业、市场需求和社会资本的有效对接，真正发挥创客的经济“新引擎”作用，推动经济社会发展。",
                },
                {   
                    img: p4,
                    title: "潮人创客创意园",
                    adrs: "汕头市龙湖区",
                    area: "20000平米",
                    content1: "园区总占地面积7316平方米，建筑面积22067平方米，配套 2800平方米停车空间，按照文化创意区、科技体验馆、创业孵化基地、公共会议室、生活休闲配套区、创客咖啡区、项目路演中心为布局，提供多种主题的办公环境（工业新中式办公主题、咖啡办公主题、互联网办公主题、蜂窝式创业孵化主题），满足不同类型创业个人、创业团队及企业的需要，通过完善配套服务，小成本入驻，旨在为年轻创业者提供一个实现梦想的空间。",
                    content2: "其中，园区还配套公共接待室、会议室、创客咖啡/路演中心/展览中心、CRCK 潮人创客联合办公、科技体验馆、汽车美容、丰巢智能快递柜、文印区、共享饮料机等基础设施。潮人创客强调集聚效应，从规划开始，就致力打造属于园区的产业链条，从入驻企业项目的挑选（创新类/科技类/文化类/互联网），到企业找到属于产业链上的所属位置，到发挥所长，随时与邻居企业携手共进，将创意实现成为产业经营的转变。",
                },
                {   
                    img: p5,
                    title: "Z WORK众创空间",
                    adrs: "汕头市濠江区",
                    area: "30000平米",
                    content1: "中海信Z WORK众创空间位于汕头市濠江区中海信（汕头）创新产业园的启动区，是专门为本地创业者、初创企业提供孵化育成服务的孵化载体。空间已建成接待室、会议室、培训室、展示厅等完善的配套公共服务设施，可容纳32个创业团队同时办公。",
                    content2: "Z WORK众创空间还配备创业导师及管理服务团队，可为入驻的创业者及初创企业提供完善产业服务。在濠江区相关单位的指导支持下，Z WORK众创空间已连续开展4期SYB创业培训，总学员约100名，有效提高广大青年自主创业能力，营造尊重创新、勇于创新的浓厚氛围。",
                },
            ]
            }
        },
        created() {
            // 初始化 dialogVisible 数组
            this.dialogVisible = this.makerlist.map(() => false);
        },
        methods: {
            toggleDialog(index) {
                if (Array.isArray(this.dialogVisible) && index >= 0 && index < this.dialogVisible.length) {
                    this.dialogVisible[index] = !this.dialogVisible[index];
                } else {
                    console.error('Invalid index or dialogVisible is not an array');
                }
            }
        }
    };
</script>

<style>
    .maker {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .maker-item {
            margin: 15px;
            border-radius: 5px;
            box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.20);
            background-color: #ffffff;
            cursor: pointer;
            dl {
                width: 500px;
                height: 200px;
                padding: 5px;
                dt {
                    width: 55%;
                    height: 100%;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        position: absolute;
                    }
                }
                dd {
                    width: 40%;
                    height: 100%;
                    margin-left: 290px;
                    .adrs {
                        border-bottom: 1px solid #cccccc;
                    }
                    p { 
                        img {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .maker-content {
            width: 800px;
            img {
                width: 60%;
                height: 300px;
            }
        }
    }
</style>