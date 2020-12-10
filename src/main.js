import Vue from "vue";
import App from "./App.vue";
import router from "./router";

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


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
