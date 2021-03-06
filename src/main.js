import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";

// 引入element
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount("#app");
