<template>

  <el-row class="tac">
    <el-col :span="4">
      <el-button type="primary"
                 @click="toHome">后台系统管理</el-button>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item index="1-1">管理员设置</el-menu-item>
          <el-menu-item index="1-2"></el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"
                @click="toUser">用户设置</span>
        </el-menu-item>
        <el-menu-item index="3"
                      disabled>
          <i class="el-icon-document"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toUser () {
      this.$router.push({ path: '/tab' })
    },
    toHome () {
      this.$router.push({ path: '/navigation' })
    }
  }
}
</script>
