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

  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
