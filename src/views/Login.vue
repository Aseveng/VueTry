<template>
  <div id="app">
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <img src="../assets/logo.png">
      <br />
      <p class="login-home">进入后台管理</p>
      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link> -->
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
    <el-input v-model="admin"
              style="width:200px"
              placeholder="用户名">

    </el-input>
    <br />
    <el-input v-model="password"
              style="width:200px"
              placeholder="密码 ">

    </el-input>
    <br />

    <el-button type="primary"
               style="width:160px"
               v-on:click="Login">登录</el-button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      admin: '',
      password: ''
    }
  },
  methods: {
    Login: function () {
      this.$router.push({ path: '/navigation' })
    }
  }
}
</script>

<style>
.login-home {
  font-size: 22px;
}
</style>
