import type { App } from "vue";
import * as svg from "@element-plus/icons-vue";

/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
export function elSvg(app: App) {
  const icons = svg as any;
  for (const i in icons) {
    app.component(`element${icons[i].name}`, icons[i]);
  }
}

/**
 * 统一批量导出
 * @method elSvg 导出全局注册 element plus svg 图标
 * @method useTitle 设置浏览器标题国际化
 * @method lazyImg 图片懒加载
 * @method globalComponentSize element plus 全局组件大小
 * @method deepClone 对象深克隆
 */
const other = {
  elSvg: (app: App) => {
    elSvg(app);
  },
};

export default other;
