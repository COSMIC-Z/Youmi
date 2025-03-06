<template>
    <div class="login">
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <div class="login-wrap pt20">
            <h1>有米科技后台管理系统</h1>
            <div class="login-form">
                <div class="username pt30 pb20">
                    <p>管理员账号：&nbsp;</p>
                    <el-input
                    v-model="input"
                    style="width: 240px"
                    placeholder="请输入用户名"
                    clearable
                    active-class="active"
                    />
                </div>
                <div class="password pt10 pb20" active-class="active">
                    <p>管理员密码：&nbsp;</p>
                    <el-input
                      v-model="input"
                      style="width: 240px"
                      type="password"
                      placeholder="请输入密码"
                      show-password
                    />
                </div>
                <el-button class="button" type="primary">
                    <h3>登&nbsp;&nbsp;录</h3>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const input = ref('')
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        h2 {
            width: 100%;
            height: 100px;
        }
        .login-wrap {
            width: 500px;
            height: 300px;
            margin: 0 auto;
            text-align: center;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 10px 10px 50px #b4b4b4;
            .login-form {
                width: 100%;
                height: 80%;
                align-items: center;
                .username {
                    display: flex;
                    justify-content: center;
                }
                .password {
                    display: flex;
                    justify-content: center;
                }
                .button {
                    width: 100px;
                    height: 40px;
                    margin: 20px auto 0;
                    display: flex;
                    border-radius: 5px;
                    align-items: center;
                    justify-content: center;
                    h3 {
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>