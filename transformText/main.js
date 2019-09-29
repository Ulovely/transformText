import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import tfText from "./components/tf-text/tf-text.vue";
Vue.component("tfText",tfText);
Vue.prototype.Common = {
	Config: {
		header: {
			"LANGUAGE":uni.getStorageSync("LANGUAGE")||"zh-cn"//zh-tw en
		}
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
