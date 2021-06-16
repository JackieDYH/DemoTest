/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 18:20:40
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './utils/rem';
import * as filter from './filter/filter.js'; // 过滤器
import * as utils from './common/util.js'; // 公共方法
import getRequest from './utils/request/api';
import axios from 'axios';
import VueClipboard from 'vue-clipboard2'; // 剪贴板
import VueScroller from './common/scrollvue/index.js'; //'vue-scroller' //滚动获取 后者有拉起效果不好用
import web3mask from '@/common/metamask.js';
import { i18n } from '@/common/languages/i18n.js'; // 多语言
import animated from 'animate.css';
import ElementUI from 'element-ui';
// import Vant from 'vant'; // 使用按需引入
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(animated)
Vue.use(VueClipboard);
Vue.use(VueScroller);

// 公共方法
Vue.prototype.$utils = utils;
Vue.prototype.$axios = getRequest;
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
// 过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
})

// 公共bus
const Bus = new Vue();
Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

window.onload = function() {
  window.web3mask = web3mask;
  console.log(process.env.VUE_APP_NODE_ENV, "运行环境");
}