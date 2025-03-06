<template>
    <div class="common-layout">
        <el-container>
                <el-row class="menu">
                  <el-col :span="100">
                    <div class="menu-title">
                        <h1>有米科技</h1>
                    </div>
                    <el-menu
                      class="el-menu-vertical-demo"
                      @open="handleOpen"
                      @close="handleClose"
                    >
                      <el-sub-menu index="1">
                        <template #title>
                          <el-icon><location /></el-icon>
                          <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                          <el-menu-item index="1-1">item one</el-menu-item>
                          <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                          <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                          <template #title>item four</template>
                          <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                      </el-sub-menu>
                    </el-menu>
                  </el-col>
                </el-row>
            <el-container>
                <el-header class="header">Header</el-header>
                <el-main class="main">Main</el-main>
            </el-container>
        </el-container>
    </div>
  </template>

  <style>
    .common-layout {
        .menu {
            .menu-title {
                height: 80px;
                color: #ffffff;
                background-color: #409EFF;
                
            }
        }
        .header {
            height: 80px;
            background-color: #eeeeee;
        }
        .main {
            background-color: #961010;
        }
    }
  </style>