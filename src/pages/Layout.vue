<template>
  <el-container>
    <el-aside :width="isCollapse?'60px':'226px'">
      <h3 class="logo">小U商城后台</h3>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#222"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">管理中心</span>
        </el-menu-item>

        <div v-for="(item,index) in menus" :key="item.id">
          <el-submenu :index="String(index)">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="a in item.children" :key="a.id"  :index="a.url">
              <span slot="title">{{a.title}}</span>
            </el-menu-item>
          </el-submenu>
        </div>

        <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统设置</span>
          </template>
          <el-menu-item index="/menu">
            <span slot="title">菜单管理</span>
          </el-menu-item>
          <el-menu-item index="/role">
            <span slot="title">角色管理</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <span slot="title">管理员管理</span>
          </el-menu-item>
        </el-submenu> -->
        <!-- <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-shopping-bag-1"></i>
            <span>商城管理</span>
          </template>
          <el-menu-item index="/cate">
            <span slot="title">商品分类</span>
          </el-menu-item>
          <el-menu-item index="/specs">
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="3-4">
            <span slot="title">会员管理</span>
          </el-menu-item>
          <el-menu-item index="3-5">
            <span slot="title">轮播图管理</span>
          </el-menu-item>
          <el-menu-item index="3-6">
            <span slot="title">秒杀活动</span>
          </el-menu-item>
        </el-submenu> -->
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="left">
          <el-button
            class="btn"
            @click="isCollapse=!isCollapse"
            type="primary"
            icon="el-icon-s-fold"
            size="mini"
          ></el-button>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="right">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-user"></i>个人信息
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-full-screen"></i>全屏预览
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-switch-button"></i>安全退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <!-- 子路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menus:[]
    };
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    console.log(userInfo);
    this.menus = userInfo.menus
  },
  methods: {},    
  components: {},
};
</script>
<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  box-shadow: 0 0 5px #000;
}

.el-aside {
  background-color: #222;
  color: #fff;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.logo {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  text-align: center;
  letter-spacing: 3px;
  font-weight: normal;
  background-color: #555;
}
.el-menu {
  border: none;
  letter-spacing: 4px;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.left {
  display: flex;
  align-items: center;
}
.btn {
  margin-right: 12px;
}
</style>