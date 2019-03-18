<template>
  <!-- 菜品详情 -->
  <div class="wrapper">
    <v-head> </v-head>
    <v-sidebar></v-sidebar>|
    <div class="content-box">
      <div class="content">
        <!-- 切换效果，淡入淡出 -->
        <transition name="move"
                    mode="out-in">
          <el-row>
            <el-col :span="6"
                    v-for="(o, index) in 3"
                    :key="o"
                    :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '12px'}">
                <img :src=canteenWindow
                     class="image"
                     alt="1">
                <div style="padding: 14px;">
                  <span>食堂窗口</span>
                  <div class="bottom clearfix">
                    <el-button type="text"
                               class="button"
                               @click="intoDetail">进入此窗口</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col></el-col>
            <!-- <el-col :span="6"></el-col> -->
            <!-- <el-col :span="6"
                    v-for="(o, index) in 3"
                    :key="o"
                    :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img :src=canteenWindow
                     class="image"
                     alt="1">
                <div style="padding: 14px;">
                  <span>食堂窗口</span>
                  <div class="bottom clearfix">
                    <el-button type="text"
                               class="button"
                               @click="intoDetail">进入此窗口</el-button>
                  </div>
                </div>
              </el-card>
            </el-col> -->
          </el-row>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import vHead from '@/views/Head'
import vSidebar from '@/views/Sidebar'
import vTags from '@/views/Tag'
import vCanteen from '@/views/CanteenIndex'
// import bus from '@/utils/bus'

export default {
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  components: {
    vHead, vSidebar, vTags, vCanteen
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
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data () {
    return {
      canteenWindow: '../../static/cantennWindow.jpg',
      imgurl: '',
      currentDate: new Date()
    }
  },
  methods: {
    intoDetail: function () {
      // alert("1")
      this.$router.push({ path: '/Canteen2' })
    },
    sss: function () {
      this.$http({
        url: this.$http.commonUrl('meal/listMeal')
      }).then((res) => {
        this.imgurl = (res.data.data)
        // alert(res.data.data)
        // console.lop(res.data)
      })
    },
    Registe: function () {
      this.$router.push({ path: '/registe' })
    }
  }
}
</script>
