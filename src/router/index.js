import Vue from "vue"
import Router from "vue-router"
import SystemModuleRoutes from "../views/system/route"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [...SystemModuleRoutes]
})
