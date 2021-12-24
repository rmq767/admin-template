import store from "@/store";
import { Session } from "@/utils/session";
import { setAddRoute, setFilterMenuAndCacheTagsViewRoutes } from ".";
import { dynamicRoutes } from "./route";

/**
 * 后端控制路由：初始化方法，防止刷新时路由丢失
 * @method  NextLoading 界面 loading 动画开始执行
 * @method store.dispatch('userInfos/setUserInfos') 触发初始化用户信息
 * @method store.dispatch('requestOldRoutes/setBackEndControlRoutes') 存储接口原始路由（未处理component），根据需求选择使用
 * @method setAddRoute 添加动态路由
 * @method setFilterMenuAndCacheTagsViewRoutes 设置递归过滤有权限的路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
 */
export async function initBackEndControlRoutes() {
  // 无 token 停止执行下一步
  if (!Session.get("token")) return false;
  // 触发初始化用户信息
  store.dispatch("setUserInfos");
  // 获取路由菜单数据
  const res = await getBackEndControlRoutes();
  // 存储接口原始路由（未处理component），根据需求选择使用
  store.dispatch(
    "requestOldRoutes/setBackEndControlRoutes",
    JSON.parse(JSON.stringify(res.data))
  );
  // 处理路由（component），替换 dynamicRoutes（/@/router/route）第一个顶级 children 的路由
  // dynamicRoutes[0].children = await backEndComponent(res.data);
  // 添加动态路由
  await setAddRoute();
  // 设置递归过滤有权限的路由到 vuex routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
  setFilterMenuAndCacheTagsViewRoutes();
}

/**
 * 请求后端路由菜单接口
 * @description isRequestRoutes 为 true，则开启后端控制路由
 * @returns 返回后端路由菜单数据
 */
export function getBackEndControlRoutes() {
  // 模拟 admin 与 test
  const auth = store.state.userInfos.roles[0];
  // 管理员 admin
  // if (auth === 'admin') return getMenuAdmin();
  // 其它用户 test
  // else return getMenuTest();
  return Promise.resolve({ data: "data" });
}
