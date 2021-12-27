import type { App } from "vue";
import Pagination from "./Pagination.vue";

const components = [Pagination];

/**
 * @description 注册全局组件
 */
export default (app: App) => {
  for (const item of components) {
    app.component(item.name, item);
  }
};
