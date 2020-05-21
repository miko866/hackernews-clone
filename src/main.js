import Vue from "vue";
import hooks from "@u3u/vue-hooks";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { plugin } from "vue-function-api";

Vue.use(plugin);
Vue.use(hooks);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
