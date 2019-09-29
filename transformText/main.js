import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

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
