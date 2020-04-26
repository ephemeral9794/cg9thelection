import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ja from "vuetify/src/locale/ja";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true
		},
		themes: {
			light: {
				primary: "#4545ed",
				secondary: "#424242",
				accent: "#82B1FF",
				error: "#FF5252",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FFC107"
			}
		}
	},
	lang: {
		locales: { ja },
		current: "ja"
	},
	icons: {
		iconfont: "fa"
	}
});
