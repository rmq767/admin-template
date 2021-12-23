import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Session } from "@/utils/session";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/layout/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false });
  if (to.meta.title) NProgress.start();
  const token = Session.get("token");
  if (to.path === "/login" && !token) {
    next();
    NProgress.done();
  } else {
    if (!token) {
      next(`/login`);
      Session.clear();
      // resetRoute();
      NProgress.done();
    } else if (token && to.path === "/login") {
      next("/");
      NProgress.done();
    } else {
      next();
    }
  }
});

// 路由加载后
router.afterEach(() => {
  NProgress.done();
});

export default router;
