<template>
    <div class="subpage1 w1100">
        <el-breadcrumb class="breadcrumb mt20 mb20" :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/information' }">资讯</el-breadcrumb-item>
            <el-breadcrumb-item>行业动态</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <div class="title text-left">在汕头，创业见习还有这么多补贴可以申请！</div>
            <div class="date">发布时间：2025/03/05</div>
            <div class="summary mt10">就业是最大的民生。为进一步稳就业、促发展、惠民生，汕头市人社部门出台了一系列就业创业优惠政策。接下来，我们将分类、分期简要介绍补贴内容，方便企业和群众申请。</div>
            <div class="text">
                <p><strong>一次性创业资助</strong></p>
                <p>
                    在汕头市创办初创企业（指在我市<strong>登记注册3年内</strong>的小微企业、个体工商户、社会组织等），<strong>登记注册满6个月</strong>，
                    申请补贴前连续3个月有在职员工（不含法定代表人或经营者）正常缴纳社会保险费，申请时未被市场监管部门列入“经营异常名录”，
                    并且法定代表人或经营者女性不超过55周岁、男性不超过60周岁，可申请给予<strong>一次性10000元的补贴</strong>。
                </p>
                <p><strong>创业租金补贴</strong></p>
                <p>
                    在汕头市区域内租赁场地用于经营（租赁地址与注册登记地一致），相关场地非法定代表人或经营者自有物业，
                    申请补贴前连续3个月有在职员工（不含法定代表人或经营者）正常缴纳社会保险费，申请时未被市场监管部门列入“经营异常名录”，
                    可按<strong>每年最高4000元</strong>的标准给予补贴。补贴期限累计不超过3年。
                </p>
                <p><strong>创业带动就业补贴</strong></p>
                <p>
                    初创企业招用员工（法定代表人或个体户经营者除外），签订一年期限劳动合同，申请补贴前连续6个月为招用员工缴纳社会保险费且申请时仍在本企业就业的，
                    可按招用3人以下<strong>每人2000元</strong>、招用4人以上的<strong>每增加1人给予3000元</strong>，总额最高不超过3万元的标准给予补贴。
                </p>
                <p><strong>就业见习补贴</strong></p>
                <p>
                    对组织毕业2年内高校毕业生或16-24岁失业青年参加就业见习（见习期须满3个月（含）以上，最长12个月），
                    每月按不低于我市最低工资80%的标准支付工作补贴的用人单位（劳务派遣单位除外），按<strong>每人每月1000元</strong>的标准给予用人单位补贴。补贴期限最长不超过12个月。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { ArrowRight } from '@element-plus/icons-vue';
    export default {
        data () {
            return {
                ArrowRight,
            }
        }
    }
</script>

<style>
    .subpage1 {
        .breadcrumb {
            font-size: 16px;
        }
        .content {
            width: 100%;
            margin: 0 0 50px;
            padding: 50px 100px;
            box-sizing: border-box;
            background-color: #ffffff;
            .title {
                font-size: 30px;
                font-weight: 700;
                color: #444444;
            }
            .date {
                color: #999999;
                margin: 10px 0 20px;
            }
            .summary {
                border: 1px solid #eeeeee;
                border-radius: 10px;
                padding: 15px 30px;
                line-height: 25px;
                background-color: #f8f8f8;
            }
            .text {
                margin: 20px 0;
                p {
                    margin: 0 0 20px;
                    strong {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>