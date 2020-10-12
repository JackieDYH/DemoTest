import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/vxetable",
    name: "vxetable",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vxetable.vue")
  },
  {
    path: "/eltable",
    name: "eltable",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Eltable.vue")
  },
  {
    path: "/map",
    name: "map",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map.vue")
  },
  {
    path: "/map2",
    name: "map2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/map2.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
