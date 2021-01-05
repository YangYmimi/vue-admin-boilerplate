import { APP } from "../mutation-types"

const defaults = {
  requestLoading: "", // 全局Loading请求实例
  requestCount: 0 // 当前请求数量
}

const app = {
  namespaced: true,
  // 可以使用 Object.assign 混入默认配置
  state: Object.assign({}, defaults),
  mutations: {
    // Reset Store State. 需要实现每个namespace下的reset_store方法
    [APP.RESET_STORE](state) {
      Object.keys(state).forEach(index => {
        if (Object.prototype.hasOwnProperty.call(defaults, index)) {
          state[index] = defaults[index]
        }
      })
    },
    [APP.GLOBAL.SET_REQUEST_LOADING](state, requestLoading) {
      state.requestLoading = requestLoading
    },
    [APP.GLOBAL.INCREASE_REQUEST_COUNT](state, count) {
      // increase request count
      state.requestCount += count
    },
    [APP.GLOBAL.DECREASE_REQUEST_COUNT](state, count) {
      // decrease request count
      state.requestCount -= count
    }
  },
  actions: {
    reset({ commit }) {
      commit(APP.RESET_STORE)
    },
    setLoading({ commit }, requestLoading) {
      commit(APP.GLOBAL.SET_REQUEST_LOADING, requestLoading)
    },
    increaseRequestCount({ commit }, count) {
      commit(APP.GLOBAL.INCREASE_REQUEST_COUNT, count)
    },
    decreaseRequestCount({ commit }, count) {
      commit(APP.GLOBAL.DECREASE_REQUEST_COUNT, count)
    }
  }
}

export default app
