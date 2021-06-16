/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 14:53:00
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { $t } from '@/common/languages/i18n.js';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: $t("Home.shequzuopin"),//首页
      keepAlive: true, // 需要被缓存
    },
    component: () =>import("../views/Home.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
