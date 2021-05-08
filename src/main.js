import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 公共过滤器
import * as filter from './filter/filter.js';
import * as utils from './common/util.js';

// element表格
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '4GC7SQkTtq09N8QAKhIrTsjHAxi00K8i'
})

// 全量引入vxe-table表格组件
// import 'xe-utils'
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/style.css'

// Vue.use(VXETable)

// 给 vue 实例挂载全局窗口对象，属性名称随意定义，例如：$XModal
// Vue.prototype.$modal = VXETable.modal;

// 按需引入vxe-table表格组件
// import './plugins/utils'
// import './plugins/table'

// 把vue实例当成一个公共的容器,挂载到vue实例的原型上
Vue.prototype.$bus = new Vue();

// 全局挂载echarts
import echarts from 'echarts';
import 'echarts/map/js/china';
import china from 'echarts/map/json/china.json';
echarts.registerMap('china', china);
Vue.prototype.$echarts = echarts;

// 轮播图
import Slider from 'wxp-swiper'
Vue.use(Slider)

// 引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// animate.css
import animate from 'animate.css';
Vue.use(animate)

// ant-design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

// 懒加载
import VueLazyLoad from 'vue-lazyload'; 
Vue.use(VueLazyLoad,{
	error:'../static/logo.png', // 加载错误的图片
	loading:'../static/image/img02.jpg' // 加载时的图片
});

// 渐进式
import progressive from 'progressive-image/dist/vue'; 
import 'progressive-image/dist/index.css';//样式
Vue.use(progressive, {
    removePreview: true,
    scale: true
})

const G2 = require('@antv/g2');
// import G2 from '@antv/g2'; 
Vue.prototype.$G2 = G2;

// 图片放大预览
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

// 引入web3js
import web3 from 'web3';
Vue.prototype.web3js = web3;

// 引入语言转换
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
import { i18n } from './common/languages/i18n.js'

// 引入剪贴板
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

// 引入vant 已开启按需引入 全量引入失效
// import Vant from 'vant';
import { Swipe, SwipeItem, Icon, Tab, Tabs, Collapse, CollapseItem, Circle, Popover, Popup, PullRefresh, Sticky, List, RadioGroup, Radio, Dialog, Pagination } from "vant";
import 'vant/lib/index.css';
// Vue.use(Vant);
Vue.use(Swipe).use(SwipeItem).use(Icon).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Circle).use(Popover).use(Popup).use(PullRefresh).use(Sticky).use(List).use(RadioGroup).use(Radio).use(Dialog).use(Pagination);

// 过滤器filter的全局封装
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
})

// 公共方法
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");

window.onload = function () {
  console.log(process.env, '当前环境');
}