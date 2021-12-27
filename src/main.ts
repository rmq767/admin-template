import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import other from "@/utils/other";
import components from "@/components";

const app = createApp(App);

/**
 * @description 注册全局icon
 */
other.elSvg(app);
/**
 * @description 注册全局组件
 */
components(app);

app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
