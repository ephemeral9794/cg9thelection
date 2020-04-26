import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: h => h(App)
}).$mount("#app");
