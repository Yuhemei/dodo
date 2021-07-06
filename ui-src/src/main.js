/*
 * @Author: your name
 * @Date: 2021-07-06 10:06:59
 * @LastEditTime: 2021-07-06 14:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dodo\ui-src\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/farther.css';
Vue.use(ElementUI);
Vue.use(echarts);
Vue.prototype.$echarts = echarts;
import {
  Toast
} from 'vant';

import {
  Lazyload
} from 'vant';

import './plugins/element.js';

Vue.config.productionTip = false
// 前后端分离只用前端
// axios.defaults.baseURL = "http://127.0.0.1:5000/api";

// 绑定到原型
// Vue.prototype.$axios = axios;


// 添加请求拦截器
// axios.interceptors.request.use((config) => {
//   if (!config.headers.Authorization && localStorage.getItem('token')) {
//     config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
//   }
//   // 有拦截就要有返回
//   return config;
// });

// 添加响应拦截器
// axios.interceptors.response.use(response => {
//   return Promise.resolve(response.data);
// }, error => {
//   console.log(error.response)
//     Toast.fail(error.response.data.message);
// })
// 封装函数处理图片路径
// Vue.prototype.$fixImgUrl = function (url) {
//   if (url.indexOf("http") < 0) {
//     return axios.defaults.baseURL + url;
//   } else {
//     return url;
//   }
// };

// 注册时设置`lazyComponent`选项
Vue.use(Lazyload, {
  lazyComponent: true,
  loading: '/static/imgs/01.jpg'
});
/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


