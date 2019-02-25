<template>

  <div style="position:absolute; width:100%; height:100%; z-index:-1; left:0; top:0;">
    <!-- <img src="../assets/img/resiger.jpg"
         height="100%"
         width="100%"
         style="left:0; top:0;"> -->
    <el-form ref='form'
             :model='form'
             label-width='100px'>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label-width='120px'>
            <span>
              <font color='blue'
                    size='7'>注册登录页面</font>
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label='手机号：'
                        prop='phoneNumber'>
            <el-input v-model='form.phoneNumber'
                      size='medium'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label='姓名：'
                        prop='name'>
            <el-input v-model='form.name'
                      size='medium'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label='用户名：'
                        prop='username'>
            <el-input v-model='form.username'
                      size='medium'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label='密码：'
                        prop='password'>
            <el-input v-model='form.password'
                      size='medium'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item label='地址：'
                        prop=''>
            <el-input v-model='form.address'
                      type="textarea"
                      size='medium'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex'
              justify='center'>
        <el-col :span='7'>
          <el-form-item>

            <el-button type="primary"
                       @click='register'>注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

  </div>
</template>
<script>
export default {

  name: 'firstdemo',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/resiger.jpg') + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      },
      note: {
        backgroundImage: 'url(' + require('../assets/img/resiger.jpg') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '25px auto',
        backgroundSize: '100% 100%',
        hight: '100%',
        marginTop: '5px'
      }
    }
  },
  methods: {
    submit: function () {
      if (this.form.name === '张三' && this.form.password === '123476') {
        alert('登陆成功')
      } else {
        alert('账号或密码错误')
      }
    },
    register: function () { }
  }
}
</script>
