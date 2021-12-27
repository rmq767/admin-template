import { RouteRecordRaw } from "vue-router";

/**
 * @description 需要动态加载的路由
 * title:名称，
 * roles:权限，
 * icon:图标
 * isHide:是否侧边菜单隐藏
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: () => import("@/layout/Home.vue"),
    children: [
      {
        path: "/home",
        name: " Home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页",
          roles: ["admin", "common"],
          icon: "",
          isHide: false,
        },
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
        meta: {
          roles: ["admin"],
          title: "关于我",
          icon: "",
          isHide: false,
        },
      },
      {
        path: "/changepassword",
        name: "ChangePassword",
        component: () => import("@/views/ChangePassword.vue"),
        meta: {
          roles: ["admin", "common"],
          title: "修改密码",
          icon: "",
          isHide: false,
        },
      },
    ],
  },
];

/**
 * @description 静态路由
 */
export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "页面找不到",
    },
  },
];
