import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("../pages/Home.vue");
const A = () => import("../pages/A.vue");
const B = () => import("../pages/B.vue");

//路由
const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/a", component: A },
  { path: "/b", component: B },
];

//createRouter:通过配置项指定路由模式和路由项，返回一个Vue可加载的插件
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
