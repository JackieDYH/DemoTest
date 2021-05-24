import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
      title: "首页",
      keepAlive: true, // 需要被缓存
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "视频",
      keepAlive: false, // 不需要被缓存
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/about2",
    name: "About2",
    meta: {title: "视频", keepAlive: false,},
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About2.vue")
    },
  {
    path: "/vxetable",
    name: "vxetable",
    meta: { title: "表格", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vxetable.vue")
  },
  {
    path: "/eltable",
    name: "eltable",
    meta: { title: "表格", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Eltable.vue")
  },
  {
    path: "/map",
    name: "map",
    meta: { title: "地图1", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map.vue")
  },
  {
    path: "/map2",
    name: "map2",
    meta: { title: "地图2", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map2.vue")
  },
  {
    path: "/map3",
    name: "map3",
    meta: { title: "地图3", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map3.vue")
  },
  {
    path: "/map4",
    name: "map4",
    meta: { title: "地图4", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map4.vue")
  },
  {
    path: "/lunbo",
    name: "lunbo",
    meta: { title: "轮播", keepAlive: true,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lunbo.vue")
  },
  {
    path: "/img",
    name: "img",
    meta: { title: "图片", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/img.vue")
  },
  {
    path: "/pic",
    name: "pic",
    meta: { title: "环形图", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pic.vue")
  },
  {
    path: "/pdf1",
    name: "pdf1",
    meta: { title: "pdf展示", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pdf1.vue")
  },
  {
    path: "/pdf2",
    name: "pdf2",
    meta: { title: "pdf展示", keepAlive: true,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pdf2.vue")
  },
  {
    path: "/pmd",
    name: "pmd",
    meta: { title: "跑马灯", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pmd.vue")
  },
  {
    path: "/image",
    name: "image",
    meta: { title: "图片加载", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/image.vue")
  },
  {
    path: "/antv",
    name: "antv",
    meta: { title: "antv-g2", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/antv.vue")
  },
  {
    path: "/imgyl",
    name: "imgyl",
    meta: { title: "图片放大预览", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/imgyl.vue")
  },
  {
    path: "/entozh",
    name: "entozh",
    meta: { title: "entozh", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/entozh.vue")
  },
  {
    path: "/hover",
    name: "hover",
    meta: { title: "hover", keepAlive: false,},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/hover.vue")
  },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()  //执行进入路由，如果不写就不会进入目标页
})

export default router;
