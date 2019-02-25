<template>
  <div id="app">
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <img src="../assets/logo.png">
      <br />
      <p class="login-home">进入食堂订餐</p>
      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link> -->
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.username"
                  style="width:200px"
                  placeholder="用户名">
        </el-input>
      </el-form-item>
      <br />
      <el-form-item>
        <el-input type='password'
                  v-model="form.password"
                  style="width:200px"
                  placeholder="密码 ">

        </el-input>
      </el-form-item>
      <br />

      <el-button type="primary"
                 style="width:80px"
                 v-on:click="Login">登录
      </el-button>
      <el-button type="primary"
                 style="width:80px"
                 v-on:click="Registe">注册
      </el-button>
    </el-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      form: {
        admin: '',
        password: ''

      }
    }
  },
  methods: {
    Login: function () {
      this.$http({
        url: this.$http.commonUrl('login'),
        method: 'post',
        data: {
          username: this.form.username,
          password: this.form.password
        }
      }).then(({ data }) => {
        this.$message({
          message: data,
          duration: 3000,
          type: 'success'
        })
        if (data === '登录成功管理员' || data === '登录成功') {
          this.$router.push({ path: '/home' })
        }
      })
    },
    Registe: function () {
      this.$router.push({ path: '/registe' })
    }
  }
}
</script>

<style>
.login-home {
  font-size: 22px;
}
</style>
