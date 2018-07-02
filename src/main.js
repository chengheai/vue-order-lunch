import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import axios from 'axios';
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://wd2468178309upkpi.wilddogio.com/'
// TODO: 提取到routes.js

// const routes = [
//   { path: '/', component: Home },
//   { path: '/menu', name: 'menuLink', component: Menu },
//   { path: '/admin', component: Admin
//     // beforeEnter: (to, from, next) => {
//     // 路由独享守卫 

//     // alert('非登录状态，不能访问此页面!')
//     // next(false);

//     //   // 判断store.getters.isLogin === false
//     // if(to.path == '/login' || to.path == '/register'){
//     //   next();
//     // }else{
//     //   alert('还没有登录，请先登录!');
//     //   next('/login');
//     // }

//     // } 
//   },
//   { path: '/about', component: About, redirect:'/history', children: [
//     { path: '/about/contact', name: 'contactLink', redirect:'/personname', component: Contact, children: [
//       { path: '/phone', name:'phoneNumber', component: Phone },
//       { path: '/personname', name:'personName', component: PersonName }
//     ] },
//     { path: '/delivery', name: 'deliveryLink', component: Delivery },
//     { path: '/history', name: 'historyLink', component: History },
//     { path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide },
//   ] },
//   { path: '/login', component: Login },
//   { path: '/register', component: Register },
//   { path: '*',redirect: '/'}  // http://localhost:8080/menughfgfdgfg
// ]
// TODO: 提取到routes.js

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return {x:0, y:100 }
    // return { selector: '.btn'} // 顶到class btn
    if(savedPosition){
      return savedPosition  // 页面返回上次页面浏览的位置
    }else{
      return { x:0, y:0 }
    }
  }
})

// // 全局守卫
// router.beforeEach((to, from, next) =>{
//   // alert('还没有登录，请先登录');
//   // next();
//   console.log('to:',to)

//   // 判断store.getters.isLogin === false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还没有登录，请先登录!');
//     next('/login');
//   }
// })

// // 后置钩子
// router.afterEach((to, from) =>{
//   alert('after each'); // 不管切换哪个组件都执行本次alert
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
