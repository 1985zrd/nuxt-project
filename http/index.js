import axios from 'axios'
import globalConfig from '@/config/index'
import loading from './loading'
import { Message } from 'element-ui'

const baseURL = ''

axios.defaults.withCredentials = true

const $request = axios.create({
  baseURL: baseURL,
  timeout: 1000*60
})

$request.interceptors.request.use(config => {
  // console.log(config)
  config.headers['Token'] = ''
  loading.start() // 如果不需要loading，可以不用
  return config
}, error => {
  return Promise.reject(error)
})

$request.interceptors.response.use(response => {
  loading.end()
  if (response.data.code === 401) { // 未登录状态 清除用户信息
    // 清除用户信息
    $nuxt.$store.commit('setLogin', false)
    $nuxt.$store.commit('setUsername', '')
  }
  if (response.data.code !== 200) {
    Message({
      message: response.data.message
    })
  }
  return response.data
}, error => {
  // 这里返回系统错误，可以在这里做统一处理
  loading.end()
  Message({
    message: '服务出错了'
  })
  return Promise.reject(error)
})

const cancelToken = () => {
  return new axios.CancelToken(cancel => {
    globalConfig.cancelTokenList.push({ cancel })
  })
}

const getData = (url, data = {}, method = 'GET', headers, responseType = 'json') => {
  let type = method.toUpperCase()
  const requestConfig = {
    url: url,
    method: type,
    headers,
    responseType, // json blob stream text document arraybuffer
    cancelToken: cancelToken()
  }
  if (type === 'GET' || type === 'DELETE') {
    // if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    //   data.t = new Date().getTime()
    // }
    data.t = new Date().getTime()
    requestConfig.params = data
  } else {
    requestConfig.data = data
  }
  return $request(requestConfig)
}

export default getData
