<template>
  <nav class="site-navbar"
       style="color:red"
       :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand"
          @click="$router.push({ name: 'home' })">
        <a class="site-navbar__brand-lg"
           href="javascript:;">11</a>
        <a class="site-navbar__brand-mini"
           href="javascript:;">11</a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <el-menu class="site-navbar__menu"
               mode="horizontal">
        <el-menu-item class="site-navbar__switch"
                      index="0"
                      @click="sidebarFold = !sidebarFold">
          <icon-svg name="zhedie"></icon-svg>
        </el-menu-item>
      </el-menu>
      <el-menu class="site-navbar__menu site-navbar__menu--right"
               mode="horizontal">
        <el-menu-item index="1"
                      @click="$router.push({ name: 'theme' })">
          <template slot="title">
            <el-badge value="new">
              <icon-svg name="shezhi"
                        class="el-icon-setting"></icon-svg>
            </el-badge>
          </template>
        </el-menu-item>
        <el-menu-item class="site-navbar__avatar"
                      index="3">
          <el-dropdown :show-timeout="0"
                       placement="bottom">
            <span class="el-dropdown-link">

            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePassowrdVisible"
                     ref="updatePassowrd"></update-password>
  </nav>
</template>
