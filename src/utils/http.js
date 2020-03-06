import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { showLoading, closeLoading, increaseRequestCount, decreaseRequestCount } from './loading'

const service = axios.create({
  baseURL: `${process.env.VUE_APP_APIBASEURL}`,
  timeout: 5000,
  withCredentials: true
})

service.interceptors.request.use(
  (config) => {
    if (!config.hideLoading) { // default show loading, some requests do not need loading
      showLoading()
    }
    increaseRequestCount()

    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
    return config
  },
  (error) => {
    decreaseRequestCount()
    closeLoading()
    Message.error({ message: error.message })
    return Promise.reject(error)
  }
)

/**
 * 后端返回格式默认按照下述进行
 * {
 *   code: 200,
 *   message: 'OK',
 *   data: data
 *  }
 */
service.interceptors.response.use(
  (response) => {
    decreaseRequestCount()
    closeLoading()
    const data = response.data

    return new Promise((resolve, reject) => {
      // 按照后端返回 code 进行自定义处理
      switch (data.code) {
        case 0:
          return resolve(data.data)
        case 401: // un authorization
          window.UPLTV_VUE_INSTANCE.$router.push({ name: 'system-login' })
          break
        default:
          Message.error({
            message: data.message,
            dangerouslyUseHTMLString: true
          })
          break
      }

      // 失败则将reponse.data内容都返回给页面
      return reject(data)
    })
  },
  (error) => {
    decreaseRequestCount()
    closeLoading()
    Message.error({ message: error.message })
    return Promise.reject(error)
  }
)

export default service
