import axios from 'axios'
// create an axios instance
const http = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5d2b123dd222885fb7e48c77/comic', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request拦截器 request interceptor
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
http.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default http
