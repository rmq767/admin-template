import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./styles/index.scss";
import other from "@/utils/other";

const app = createApp(App);

other.elSvg(app);

app.use(store).use(router).use(ElementPlus).mount("#app");
