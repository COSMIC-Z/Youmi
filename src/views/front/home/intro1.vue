<template>
    <div class="intro1 w1100 pb30">
        <div class="bread-back">
            <el-breadcrumb class="breadcrumb">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>业务介绍</el-breadcrumb-item>
                <el-breadcrumb-item>6类咨询服务</el-breadcrumb-item>
            </el-breadcrumb>
            <a href="/">
                <div class="back">
                    返 回 
                    <svg 
                    t="1741252200658" 
                    class="icon" 
                    viewBox="0 0 1103 1024"
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2666" 
                    width="18" 
                    height="18">
                        <path 
                        d="M11.652047 412.151798a41.805655 41.805655 0 0 0 0 57.945315l415.69465 407.034345c15.9822 15.746009 41.097085 2.834282 41.097085-21.178382V596.85249s605.591525-222.176194 552.527473 409.711166c-1.417141 17.871721 19.839972 23.697744 25.429805 7.085705 79.832268-242.488546 189.188304-815.643291-586.460123-764.941141l6.534594-219.656832c0.7873-24.406315-24.721235-38.184073-41.097085-22.123144L11.652047 412.151798z" 
                        p-id="2667"></path>
                    </svg>
                </div>
            </a>
        </div>
        <div class="img">
            <img src="@/assets/img/home/intro_img/intro1.png">
        </div>
    </div>
</template>

<style>
    .intro1{
        height: 100%;
        .bread-back {
            width: 80%;
            margin: 15px auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .breadcrumb {
                font-size: 18px;
            }
            a {
                .back {
                    font-size: 18px;
                    font-weight: 400;
                    fill: #8a8a8a;
                    margin: 0 10px;
                    &:hover {
                        color: #eeaabb;
                        fill: #eeaabb;
                    }
                }
            }
        }
        .img {
            width: 80%;
            margin: 0 auto;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>