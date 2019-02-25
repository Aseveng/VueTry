<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn"
         @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">食堂订餐系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen"
             @click="handleFullScreen">
          <el-tooltip effect="dark"
                      :content="fullscreen?`取消全屏`:`全屏`"
                      placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark"
                      :content="message?`有${message}条未读消息`:`消息中心`"
                      placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge"
                v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator"> <img src="../assets/img/img.jpg"
               preview="0"
               preview-text="管理员"></div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name"
                     trigger="click"
                     @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}} <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a target="_blank">
              <el-dropdown-item command="changeInfo">修改密码</el-dropdown-item>
            </a>
            <!-- <template>
              <el-dialog title="信息编辑"
                         :visible.sync="dialogFormVisible"
                         :modal-append-to-body='false'>
                <el-form :model="form">
                  <el-form-item label="日期"
                                :label-width="formLabelWidth">
                    <el-date-picker v-model="form.date"
                                    type="date"
                                    placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="名称"
                                :label-width="formLabelWidth">
                    <el-input v-model="form.name"
                              autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="省份"
                                :label-width="formLabelWidth">
                    <el-input v-model="form.province"
                              autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="地区"
                                :label-width="formLabelWidth">
                    <el-input v-model="form.map"
                              autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="地址"
                                :label-width="formLabelWidth">
                    <el-input v-model="form.address"
                              autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="邮编"
                                :label-width="formLabelWidth">
                    <el-input v-model="form.youbian"
                              autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer"
                     class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary"
                             @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </template> -->
            <el-dropdown-item divided
                              command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
// import bus from '@/utils/bus'
export default {
  date () {
    return {
      dialogFormVisible: false,
      dialogTableVisible: false

    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        this.$router.push({ path: '/login' })
      }
      if (command === 'changeInfo') {
      }
    }
    // collapseChage: {
    //   collapseChage () {
    //     this.collapse = !this.collapse
    //     bus.$emit('collapse', this.collapse)
    //   }
    // }
  }
}
</script>
<style >
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: cornsilk;
  background-color: darkslategray;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
