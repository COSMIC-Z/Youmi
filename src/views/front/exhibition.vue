<!-- 会务会展 -->

<template>
    <div class="affairs-inner-page is-response-view">
        <div class="bannerwrap">
        </div>
        <div class="serviceSite w1100">
            <h3 class="titleHox mt50">
                <span>一、业务类型</span>
    
            </h3>
           
            <div class="park-picture meeting_open text-center">
                <img src="@/assets/img/exhibition/meeting_open_img.png" />
            </div>
            <h3 class="titleHox mt50">
                <span>二、往期会议</span>
            </h3>
            <p class="desTitle mb20 mt30 t2">
                有米科技一直坚持为孵化公司举办企业培训会、行业数据分析会、护肤科技分享会等。
                目前，有米共举办行业交流论坛 50 余次。
            </p>
            
            <div class="item_box">
                <img src="@/assets/img/exhibition/meeting02.png" />
                <span style="text-align:center;">
                    凤雀托梦 | 闻香而来 <br />
                    有米科技2021新产品发布会
                </span>
            </div>
            <div class="item_box">
                <img src="@/assets/img/exhibition/meeting03.png" />
                <span>
                    科技应用学校师生代表莅临参观交流会
                </span>
            </div>
    
    
        </div>
    </div>
</template>

<script>
</script>

<style>
    .bannerwrap {
        width:100%;
        height: 400px;
        background: url(@/assets/img/exhibition/affairs_banner.jpg) no-repeat center;
        background-size: cover;
    }
    .meeting_open {
        img {
            width:1100px;
            margin-top:30px;
        }
    }
    .item_box {
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:60px;
        > img {
            width:800px;
            margin-bottom:8px;
            border-radius:12px;
        }
        > span {
            color:#666;
            font-size:14px;
        }
    }
</style>