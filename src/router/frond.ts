import store from "@/store";
import { Session } from "@/utils/session";
import { setAddRoute, setFilterMenuAndCacheTagsViewRoutes } from "./index";

/**
 * @description 前端加载路由
 * @export
 * @return {*}
 */
export async function initFrontEndControlRoutes() {
  // 无 token 停止执行下一步
  if (!Session.get("token")) return false;
  // 触发初始化用户信息
  store.dispatch("setUserInfos");
  // 添加动态路由
  await setAddRoute();
  // 设置递归过滤有权限的路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
  setFilterMenuAndCacheTagsViewRoutes();
}
