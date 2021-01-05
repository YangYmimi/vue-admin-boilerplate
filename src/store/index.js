import Vue from "vue"
import Vuex from "vuex"
import app from "./modules/app"

Vue.use(Vuex)

const getModules = storeInstance => {
  return storeInstance._modules.root._children
}

export default new Vuex.Store({
  modules: {
    app
  },
  actions: {
    // global actions
    resetStates({ dispatch }) {
      const modules = getModules(this)
      for (const currentModuleName in modules) {
        dispatch(`${currentModuleName}/reset`)
      }
    }
  }
})
