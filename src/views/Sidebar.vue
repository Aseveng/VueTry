// 左侧选择标签页
<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="this.$router.path"
             :collapse="collapse"
             background-color="#324157"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index"
                      :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs"
                          :index="subItem.index"
                          :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs"
                              :key="i"
                              :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else
                            :index="subItem.index"
                            :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"
                        :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'home',
          title: '食堂首页'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: 'mealDetail',
          title: '食堂详情',
          subs: [
            {
              index: 'Canteen1',
              title: '第一食堂'
            },
            {
              index: 'Canteen2',
              title: '第二食堂'
            },
            {
              index: 'Canteen3',
              title: '第三食堂'
            },
            {
              index: 'Canteen4',
              title: '第四食堂'
            },
            {
              index: 'Canteen5',
              title: '第五食堂'
            },
            {
              index: 'Canteen6',
              title: '第六食堂'
            }

          ]
        },
        {
          index: 'ShoppingCart',
          title: '购物车'
        },
        {
          index: 'OrderDetail',
          title: '我的订单'
        },
        {
          index: 'UserInfo',
          title: '个人信息'
        }, {
          index: 'mealDetail',
          title: '食堂食堂详情'
        }
      ]
    }
  },
  computed: {
    // onRoutes () {
    //   return this.$route.path
    // }
  }
}
</script>

<style >
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar-el-menu {
  height: 100%;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
/* 子元素样式选择 */
/* .sidebar > ul {
  height: 100%;
} */
</style>
