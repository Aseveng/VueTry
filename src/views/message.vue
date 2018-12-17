<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick">
    <el-tab-pane label="用户管理"
                 name="first">
      <el-table :data="unread">
        <el-row>
          <template>
            <span class="message-title">{{unread.title}}</span>
          </template>
        </el-row>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="配置管理"
                 name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理"
                 name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿"
                 name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second',
      unread: [{
        title: '未读信息1'
      }, {
        title: '未读消息2'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
