<template>
  <div>
    <el-container style="height: 90vh; ">
      <el-aside width="200px"
                style="background-color: rgb(238, 241, 246)">
        <el-header style="background-color: white">
          <el-button @click="toHome">后台管理</el-button>
        </el-header>

        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>

            <el-menu-item index="1-1">
              <router-link to="/navigation/admin"
                           tag="p">管理员信息</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/navigation/test2"
                           tag="p">
                测试信息
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">选项2</el-menu-item>
            <el-menu-item index="1-4">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- <NavTop /> -->

      <router-view />
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import NavTop from './nav-top'
import MainNavbar from './main-navbar'
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  components: {
    MainNavbar,
    NavTop
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/navigation' })
    }
  }

}
</script>
