import { Session } from "@/utils/session";
import { createStore } from "vuex";

export default createStore({
  state: {
    userInfos: {},
    routeList: [],
  },
  mutations: {
    // 设置用户信息
    getUserInfos(state: any, data: object) {
      state.userInfos = data;
    },
    // 设置路由，菜单中使用到
    getRoutesList(state: any, data: Array<object>) {
      state.routesList = data;
    },
  },
  actions: {
    // 设置用户信息
    async setUserInfos({ commit }, data: object) {
      if (data) {
        commit("getUserInfos", data);
      } else {
        if (Session.get("userInfo"))
          commit("getUserInfos", Session.get("userInfo"));
      }
    },
    // 设置路由，菜单中使用到
    async setRoutesList({ commit }, data: any) {
      commit("getRoutesList", data);
    },
  },
  modules: {},
});
