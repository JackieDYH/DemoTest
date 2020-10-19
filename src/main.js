import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// element表格
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


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

// animate.css
import animate from 'animate.css';
Vue.use(animate)

// ant-design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
