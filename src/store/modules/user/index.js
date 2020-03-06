import { USER } from '../../mutation-types'
import STORAGE_CONSTANTS from '@/constants/storage'
import { getFromLocal, setToLocal } from '@/utils/storage'

const defaults = {
  token: getFromLocal(STORAGE_CONSTANTS.UPLTV_GLOBAL_TOKEN)
}

const user = {
  namespaced: true,
  state: Object.assign({}, defaults),
  mutations: {
    [USER.RESET_STORE] (state) {
      Object.keys(state).forEach(index => {
        state[index] = defaults[index]
      })
    },
    [USER.USER.SET_TOKEN] (state, token) {
      state.token = token
      setToLocal(STORAGE_CONSTANTS.UPLTV_GLOBAL_TOKEN, token)
    }
  },
  actions: {
    reset ({ commit }) {
      commit(USER.RESET_STORE)
    },
    setToken ({ commit }, token) {
      commit(USER.USER.SET_TOKEN, token)
    }
  }
}

export default user
