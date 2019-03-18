<template>
  <div id="app">
    <header>
      <p class="login-home">青椒肉丝盖饭</p>
      <br>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <img src="../../static/food1.jpg">
      <br />
      <!-- <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link> -->
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
    <el-form :model="form">
      <el-form-item>
        <p class="login-home">价格:15元</p>

      </el-form-item>
      <br />
      <el-form-item>
        <p class="login-home">当前评分</p>
        <el-rate v-model="value"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value}">
        </el-rate>
      </el-form-item>
      <br />
      <el-form-item>
        <p class="login-home">最新评论</p>
        <el-input type="textarea"
                  v-model="form.note"
                  style="width:500px"
                  disabled></el-input>
      </el-form-item>
      <!-- <el-button type="primary"
                 style="width:80px"
                 v-on:click="Login">返回
      </el-button> -->
      <el-button type="primary"
                 style="width:200px"
                 v-on:click="Registe">立即下单
      </el-button>
    </el-form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      form: {
        admin: '价格:15元',
        password: '',
        note: '非常好吃,肉很多'
      },
      value: 3.5
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
