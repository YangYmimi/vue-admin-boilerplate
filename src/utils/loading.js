/* Util for global loading */
import { Loading } from 'element-ui'
import store from '@/store/index'

// 增加请求数
const increaseRequestCount = (count = 1) => {
  store.dispatch('app/increaseRequestCount', count)
}

// 减小请求数
const decreaseRequestCount = (count = 1) => {
  store.dispatch('app/decreaseRequestCount', count)
}

// 展示Loading
const showLoading = (text = '') => {
  // cache global loading
  if (store.state.app.requestCount === 0) {
    const requestLoading = Loading.service({ fullscreen: true, text })
    store.dispatch('app/setLoading', requestLoading)
  }
}

// 关闭Loading
const closeLoading = () => {
  const requestLoading = store.state.app.requestLoading
  if (store.state.app.requestCount === 0 && requestLoading) {
    requestLoading.close()
  }
}

export {
  increaseRequestCount,
  decreaseRequestCount,
  showLoading,
  closeLoading
}
