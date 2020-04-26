import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ja from "vuetify/src/locale/ja";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true
		},
		themes: {
			light: {
				primary: colors.blue.base,
				secondary: colors.grey.darken1,
				accent: colors.shades.black,
				error: colors.red.accent3,
			  },
			  dark: {
				primary: colors.blue.lighten3,
			  },
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
