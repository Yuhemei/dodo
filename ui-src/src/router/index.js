/*
 * @Author: yuhemei8088
 * @Date: 2021-07-06 10:06:59
 * @LastEditTime: 2021-07-06 12:19:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dodo\ui-src\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
// 博客详细信息
import EditHrefList from '@/pages/EditHrefList';
import Mine from '@/pages/Mine';
// js相关
const forJs = ()=>import('@/pages/js/index.vue')
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'homePage',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
    {
      path: '/editHrefList',
      name: 'EditHrefList',
      component: EditHrefList,
    },
    {
      path: '/search',
      name: 'searchPage',
      component: Search
    },
    {
      path: '/register',
      name: 'registerPage',
      component: Register
    },
    {
      path: '/login',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/forJs',
      name: 'forJs',
      component: forJs
    },
  ]
});
