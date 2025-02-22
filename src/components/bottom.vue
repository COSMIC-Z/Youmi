<template>
    <div class="bottom">
        <div class="main">
            <div class="left">
                <dl class="about-us">
                    <dt style="font-size: 20px;color: #ffffff;">有米科技有限公司</dt>
                    <dd>
                        <p>中国医药产业咨询领导者</p>
                        <p>
                            产业咨询热线<br>
                            <b style="font-size: 25px;line-height: 40px;color: #2e6fd1;">
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
                        <a class="footer-site" href="https://www.csdn.net/" target="_blank">
                            <span class="footer-ico">
                                <img src="../assets/minilogo1.jpg">
                        <a href="https://www.csdn.net/" target="_blank" style="display: block;">
                            <span>
                                <img src="../assets/minilogo1.jpg"/>
                            </span>
                            <span>百度知道</span>
                            <span>强大的搜索引擎</span>
                        </a>
                    </dd>
                </dl>
                <dl class="footer-link">
                    <dt></dt>
                    <dd>
                        <a href="https://www.csdn.net/" target="_blank">是卖医药猎头</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                    </dd>
                </dl>
                <dl class="footer-link">
                    <dt></dt>
                    <dd>
                        <a href="https://www.csdn.net/" target="_blank">是卖医药猎头</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                        <a href="https://www.csdn.net/" target="_blank">医药产业需求</a>
                    </dd>
                </dl>
            </div>
            <div class="right">
                <div>
                    <img width="120" src="../assets/weixin.png">
                </div>
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
    @import "../assets/css/main.css";
    .bottom {
        width: 100%;
        padding: 20px 0;
        color: #b0aeae;
        background-color: #000000;
        justify-content: center;
        .main {
            width: 1100px;
            height: 90%;
            margin: auto;
            display: flex;
            .left {
                width: 900px;
                height: 100%;
                display: flex;
                .about-us {
                    height: 100%;
                }
                .footer-site {
                    display: block;
                    margin-bottom: 38px;
                    line-height: 13px;
                    font-size: 14px;
                    white-space: nowrap;
                    color: #b0aeae;
                }
                a {
                    line-height: 30px;
                    display: block;
                }
                dt {
                    display: inline-block;
                    border-bottom: 2px solid #16419e;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                }
                dd {
                    margin-inline-start: 0;
                    margin-bottom: 30px;
                }
                dl {
                    float: left;
                    margin-right: 40px;
                }
                .footer-link {
                    margin: 0 20px;
                }
            }
        }
        .footer {
            width: 1100px;
            height: 9%;
            margin: auto;
            border-top: 1px solid #b0aeae;
            display: flex;
            justify-content: center;
        }
    }

    li {
        list-style: none;
        font-family: "微软雅黑", sans-serif;
        margin-top: 10px;
    }

    .right {
        margin-top: 80px;
    }
</style>