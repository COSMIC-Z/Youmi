<template>
    <div class="bottom">
        <div class="main">
            <div class="left">
                <dl class="about-us">
                    <dt class="company-name">关于我们</dt>
                    <dd>
                        <p>中国医药产业咨询领导者</p>
                        <p>
                            产业咨询热线<br>
                            <b style="font-size: 30px;color: rgb(42, 42, 155);margin-top: 10px;">
                                400-138-6860
                            </b>
                        </p>
                        <p>规划专线：15888896161</p>
                        <p>服务邮箱：byron-he@zgsmile.com</p>
                        <p>运营总部：杭州市西湖区塘苗路40号南望大厦</p>
                    </dd>
                </dl>
                <dl>
                    <dt>产品和服务</dt>
                    <dd>
                        <a href="https://www.baidu.com/" target="_blank">
                            <span>
                                <img src="../assets/minilogo1.jpg"/>
                            </span>
                            <span>百度知道</span>
                            <span>强大的搜索引擎</span>
                        </a>
                    </dd>
                </dl>
            </div>
            <div class="right">

            </div>
        </div>
        <div class="footer">
            <li>有米科技有限公司 版权所有 | ICP经营许可证：</li>
            <li>aaaaaaaaaaa</li>
            <li> | </li>
            <li>bbbbbbbbbbbbb</li>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .bottom {
        width: 100%;
        height: 400px;
        background-color: #000000;
        justify-content: center;
    }

    .main {
        width: 1100px;
        height: 90%;
        margin: auto;
    }

    .main .left {
        width: 900px;
        height: 100%;
        display: flex;
    }

    .main .left .about-us {
        width: 300px;
        height: 100%;
        font-size: 12px;
        color: rgb(211, 211, 211);
    }

    .left dt {
        font-size: 20px;
        color: white;
        display: inline-block;
        border-bottom: 2px solid rgb(32, 63, 121);
        margin-bottom: 20px;
        padding-bottom: 10px;
    }

    .main .left dd {
        margin-inline-start: 0;
    }

    .footer {
        width: 1100px;
        height: 9%;
        margin: auto;
        border-top: 1px solid rgb(211, 211, 211);
        display: flex;
        justify-content: center;
    }

    li {
        font-size: 12px;
        color: rgb(211, 211, 211);
        list-style: none;
        font-family: "微软雅黑", sans-serif;
        margin-top: 10px;
    }
</style>