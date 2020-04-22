import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import eventBus from "@/common/EventBus";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      bus: eventBus
    };
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
