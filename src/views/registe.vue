<template>
  <div>
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm"
             style="text-align: center">
      <el-form-item label="账号"
                    prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="registe">注册</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    registe () {
      this.$http({
        url: this.$http.commonUrl('registe'),
        method: 'post',
        data: {
          username: this.ruleForm.username,
          password: this.ruleForm.password
        }
      })
    }
  }
}
</script>
