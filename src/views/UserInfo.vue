<template>
  <el-form :model="ruleForm"
           :rules="rules"
           ref="ruleForm"
           label-width="100px"
           class="demo-ruleForm"
           style="width:600px">
    <el-form-item label="电话号码"
                  prop="phoneNumber">
      <el-input v-model="ruleForm.phoneNumber"></el-input>
    </el-form-item>
    <el-form-item label="Name"
                  prop="Name">
      <el-input v-model="ruleForm.Name"></el-input>
    </el-form-item>
    <el-form-item label="用户名"
                  prop="Username">
      <el-input v-model="ruleForm.Username"></el-input>
    </el-form-item>
    <el-form-item label="新密码"
                  prop="password">
      <el-input type="password"
                v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="地址"
                  prop="address">
      <el-input type="textarea"
                v-model="ruleForm.address"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary"
                 @click="submitForm('ruleForm')">确认修改</el-button>

    </el-form-item>
  </el-form>

</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        phoneNumber: '1781111111',
        Name: '张三',
        Username: 'zhangsan11',
        // password: false,
        type: [],
        address: 'xxxxxxxxxx'
      },
      visible: true,
      inputType: true
      // rules: {
      //   name: [
      //     { required: true, message: '请输入活动名称', trigger: 'blur' },
      //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      //   ],
      //   region: [
      //     { required: true, message: '请选择活动区域', trigger: 'change' }
      //   ],
      //   date1: [
      //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      //   ],
      //   date2: [
      //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      //   ],
      //   type: [
      //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
      //   ],
      //   resource: [
      //     { required: true, message: '请选择活动资源', trigger: 'change' }
      //   ],
      //   desc: [
      //     { required: true, message: '请填写活动形式', trigger: 'blur' }
      //   ]
      // }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
