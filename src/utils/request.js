import axios from 'axios'
import { ElMessage } from 'element-plus'
import { CACHE_KEY } from './constants'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 300000, // 请求超时时间
  headers: {
    timestamp: Date.parse(new Date()) / 1000,
    reqId: Date.parse(new Date()) / 1000 + 1,
  }
})
// request拦截器
service.interceptors.request.use(config => {
  if (localStorage.getItem(CACHE_KEY.TOKEN)) {
    config.headers['Authorization'] = "bearer " + localStorage.getItem(CACHE_KEY.TOKEN)
  }
  if (config.url == "/cdc/version/queryAppVersionList") {
    config.headers.sysId = 1036
  } else {
    config.headers.sysId = sessionStorage.getItem('sysId')
  }
  config.headers.reqSign = sessionStorage.getItem('reqSign')
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

const ignoreUrls = [
  '/cas/applyToBe/checkCompanyCode', // 校验企业名称唯一性
  '/cas/applyToBe/checkCompanyNo', // 校验企业编号唯一性
  '/cas/checkRegister/checkTelephone', // 校验企业注册手机号唯一性
  '/cas/checkRegister/checkCompanyRealName', // 校验企业注册名称唯一性
  '/cas/checkRegister/checkCreditCode', // 校验统一社会信用代码唯一性
  '/cas/checkRegister/checkValidAccount', // 校验帐号有效性
  '/cas/checkRegister/checkManagerAccount', // 校验管理员帐号
  '/cas/applyToBe/checkIdCardNo', // 校验身份证号唯一
  '/cas/checkRegister/checkEmail', // 校验邮箱唯一性
]
// respone拦截器
service.interceptors.response.use(
  response => {
    // 截取端口号后的url地址
    let resUrl = response.request.responseURL.split(pathLoad.BASE_API)[1] //process.env.BASE_API
    if (response.data && response.data.success === false) {
      // 如果请求返回接口为这几种，错误信息不弹出
      if (ignoreUrls.includes(resUrl)) {
        if (response.data.errorCode == 1303) {
          // removeToken()
          // router.push({
          //     path: "/login"
          // })
        }
        return Promise.resolve(response)
      }
      // 接口返回信息
      if (response.data.errorCode == 1303) {
        // removeToken();
        // router.push({
        //     path: "/login"
        // })
      } else {
        // Message({
        //     message: response.data.errorMsg,
        //     type: 'error',
        //     duration: 1000
        // })
      }
      return Promise.resolve(response)
    }
    return response.data
  },
  error => {
    if (error.response && error.response.data.errorCode == 1303) {
      // removeToken();
      // router.push({
      //     path: "/login"
      // })
    } else {
      var str = error + ''
      if (str.search('timeout') !== -1) { // 超时error
        ElMessage({
          message: '请求超时，请稍后再试',
          type: 'error',
          duration: 1000
        })
      } else {
        ElMessage({
          message: '请求超时，请稍后再试',
          type: 'error',
          duration: 1000
        })
      }
    }
    return Promise.reject(error)
  }
)
export default service