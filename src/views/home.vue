<template>
  <div class="wrapper">
    <v-head> </v-head>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import vHead from '@/views/Head'
import vSidebar from '@/views/Sidebar'
import vTags from '@/views/Tag'
// import bus from '@/utils/bus'

export default {
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHead, vSidebar, vTags
  }
  // created () {
  //   bus.$on('collapse', msg => {
  //     this.collapse = msg
  //   })

  //   // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
  //   bus.$on('tags', msg => {
  //     let arr = []
  //     for (let i = 0, len = msg.length; i < len; i++) {
  //       msg[i].name && arr.push(msg[i].name)
  //     }
  //     this.tagsList = arr
  //   })
  // }
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
</style>
