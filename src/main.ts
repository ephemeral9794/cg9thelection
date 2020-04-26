import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
import axios from "axios"; //追記
import VueAxios from "vue-axios"; //追記

Vue.use(VueCompositionApi);
//Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: h => h(App)
}).$mount("#app");
