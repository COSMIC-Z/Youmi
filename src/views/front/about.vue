<!-- 关于我们 -->

<template>
    <div class="aboutus is-response-view about-inner-page" >
        <div class="box_aboutus">
            <img src="@/assets/img/about/about_img.png" />
            <p>
                诗迈数智以“推动医药产业，助力医药梦想” 为使命，公司总部位于杭州，在上海、北京、武汉、郑州、南京、苏州、广州、深圳、
                成都、南昌、青岛均设有分公司，在欧、美、印、设有精英人才和创新项目引进合作点。<br/> &emsp;&emsp;
                深耕医药产业<span> 13 年</span>，依托自主搭建的 <span> 500 余万人</span>的生命健康产业人才数据库及<span>90%以上</span>的产业链上下资源，
                以诗迈产业链一站式服务平台 (Biosmile) 为内核，提供招才引智、精准招商、园区运营、创业孵化、投资融资、产业规划、政策制定等服务。
                为全国上百家产业园与 2000 多家药企引进高端人才 <span>3 万余人</span>，举办行业交流论坛 <span>120 余次，</span>提供 <span>300 余次</span>科研技术、
                项目规划、管理培训等服务，构建了垂直深耕的生命健康产业生态服务链。
            </p>
    
            <div class="item_box">
                <p>
                    咨询热线: 15888896161、400-138-6860
                </p>
                <p>
                    运营总部: 杭州市西湖区塘苗路40号南望大厦
                </p>
                <p>
                    运营分部: 上海 / 广州 / 北京 / 武汉 / 南昌 / 深圳 / 郑州 / 南京 / 青岛 / 成都 / 苏州
                </p>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .aboutus {
        display:flex;
        flex-direction:column;
        align-items:center;
        .box_aboutus{
            margin:30px 0 ;
            width:600px;
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
            padding:20px 30px 30px;
            display:flex;
            flex-direction:column;
            align-items:center;
            background:#fff;
            img {
                margin-bottom:30px;
            }
            p {
                font-size:17px;
                text-indent: 2em;
                letter-spacing:1px;
                line-height:30px;
                color:#333;
                span {
                    color:#0b438d;
                }
            }
        }
        .item_box {
            margin-top:40px;
            width:400px;
            font-size:16px;
            padding:12px 30px;
            border-radius:10px;
            letter-spacing:2px;
            color:#555;
            background:#fff;
            p {
                margin-bottom:5px;
            }
        }
    }
</style> 