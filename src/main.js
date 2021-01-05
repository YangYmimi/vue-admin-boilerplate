import Vue from "vue"
// Load Vue-Router
import router from "./router"
// Load Vuex
import store from "./store"
import * as filters from "./filters"
import ElementUI from "element-ui"
import echarts from "echarts"
import App from "./App"
import LayoutBlank from "./views/layouts/blank"
import LayoutBasic from "./views/layouts/basic"

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

/* Register global components */
Vue.component("layout-blank", LayoutBlank)
Vue.component("layout-basic", LayoutBasic)

/* Register global filters */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

// 将当前的 Vue 根实例绑定到 window 对象上
// 不同项目请修改绑定对象的名字，注意前缀区分
if (window && !window.VUE_INSTANCE) {
  window.VUE_INSTANCE = app
}
