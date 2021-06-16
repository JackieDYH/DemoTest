/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 17:18:31
 */
// 状态管理器Vuex
import Vue from 'vue';
import Vuex from 'vuex';
import { Object } from 'core-js';
Vue.use(Vuex);

// 数据持久化
import createPersistedState from "vuex-persistedstate"; //使用前引入

// 引入状态
import state from './state';
// 引入修改状态的方法
import mutations from './mutation';
// 引入异步操作mutation的方法
import actions from './action';
// 引入计算属性
import getters from './getter';
// 引入模块

// 实例化Vuex厂库
export default new Vuex.Store({
  state,//初始状态
  mutations,//自定义方法 同步操作
  actions,//调用mutations方法 异步
  getters,//计算属性
  plugins: [createPersistedState({ storage: window.sessionStorage })],//数据持久化使用挂载 默认 {storage: window.localStorage}
  modules: {//模块

  }
})