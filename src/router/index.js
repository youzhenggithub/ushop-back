import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../pages/Login'
// import Layout from '../pages/Layout';
// import Menu from '../pages/Menu/Index';
// import User from '../pages/User/Index';
// import Role from '../pages/Role/Index';
// import Cate from '../pages/Cate/Index';
// import Specs from '../pages/Specs/Index';
let Login = () =>import('../pages/Login');
let Layout = () =>import('../pages/Layout');
let Menu = () =>import('../pages/Menu/Index');
let User = () =>import('../pages/User/Index');
let Role = () =>import('../pages/Role/Index');
let Cate = () =>import('../pages/Cate/Index');
let Specs = () =>import('../pages/Specs/Index');
let Home = () =>import('../pages/Home/Index');

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title:'登录页面'
      }
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      meta:{
        title:'布局页面'
      },
      //路由重定向
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'Home',
          component:Home,
          meta:{
            title:'主页面'
          },
        },
        {
          path:'/menu', 
          name:'Menu',
          component:Menu,
          meta:{
            title:'菜单管理'
          }
        },
        {
          path:'/user',
          name:'User',
          component:User,
          meta:{
            title:'管理员管理'
          }
        },
        {
          path:'/role',
          name:'Role',
          component:Role,
          meta:{
            title:'角色管理'
          }
        },
        {
          path:'/cate',
          name:'Cate',
          component:Cate,
          meta:{
            title:'分类管理'
          }
        },
        {
          path:'/specs',
          name:'Specs',
          component:Specs,
          meta:{
            title:'商品规格'
          }
        },
        // {
        //   path:'/goods',
        //   name:'Goods',
        //   component:Goods,
        //   meta:{
        //     title:'商品管理'
        //   }
        // }
      ]
    },

  ]
})

//全局前置守卫
router.beforeEach((to,from,next)=>{
  next()
  document.title = to.meta.title
})


//导出router
export default router