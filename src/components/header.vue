<template>
    <div class="header">
        <div class="logo">
            <router-link to="/home">
                <img src="@/assets/logo.png">
            </router-link>
        </div>
        <div class="menu">
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/plan" active-class="active">产园规划</router-link>
            <router-link to="/operate" active-class="active">众创运营</router-link>
            <router-link to="/investment" active-class="active">产品招商</router-link>
            <router-link to="/exhibition" active-class="active">会务会展</router-link>
            <router-link to="/maker" active-class="active">众创空间</router-link>
            <router-link to="/ameiyan" active-class="active">阿美妍</router-link>
            <router-link to="/information" active-class="active">资讯</router-link>
            <router-link to="/about" active-class="active">关于我们</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .header {
        width: 1100px;
        height: 100px;
        display: flex;
        margin: auto;
        padding-top: 20px;
    }

    .logo {
        width: 200px;
        height: 100%;
        margin: 10px 0 0 40px;
    }

    .menu {
        width: 1000px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu a {
        height: 40px; 
        font-size: 16px;
        color: black;
        font-family: "微软雅黑", sans-serif;
        text-decoration: none;
        display: flex; 
        align-items: center;
        justify-content: center; 
        padding: 0 15px;
        margin: 0 5px;
    }

    .menu a.active { 
        background-color: rgb(235, 235, 235);
        border-bottom: 3px solid rgb(29, 77, 179);
    }
</style>