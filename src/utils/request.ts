import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { CACHE_KEY } from './constants'

interface Result {
  errorCode: string;
  errorMsg: string;
  success: boolean;
  count: number;
  data: any;
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 300000, // 请求超时时间
  headers: {
    timestamp: Date.parse(new Date().toLocaleString()) / 1000,
    reqId: Date.parse(new Date().toLocaleString()) / 1000 + 1,
  }
})
// request拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = config.headers || {}
  if (localStorage.getItem(CACHE_KEY.TOKEN)) {
    config.headers['Authorization'] = "bearer " + localStorage.getItem(CACHE_KEY.TOKEN)
  }
  if (config.url == "/cdc/version/queryAppVersionList") {
    config.headers.sysId = 1036
  } else {
    config.headers.sysId = localStorage.getItem(CACHE_KEY.SYS_ID) || ''
  }
  config.headers.reqSign = localStorage.getItem(CACHE_KEY.REQ_SIGN) || ''
  return config
}, (error: AxiosError) => {
  Promise.reject(error)
})

// 如果请求返回接口为这几种，错误信息不弹出
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
  (response: AxiosResponse) => {
    // 截取端口号后的url地址
    let resUrl = response.request.responseURL.split(import.meta.env.VITE_BASE_URL)[1] //process.env.BASE_API
    const { success, errorCode, errorMsg } = response.data
    if (success === false) {
      // 让用户重新登录
      if (errorCode == 1303) {
        // removeToken()
        // router.push({
        //     path: "/login"
        // })
      }
      if (!ignoreUrls.includes(resUrl)) {
        ElMessage({
          message: errorMsg,
          type: 'error',
        })
      }
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  (error: AxiosError) => {
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

export const doGet = (url: string, params?: any, data?: any): Promise<Result> => {
  return service.request({ url, method: 'get', params, data })
}

export const doPost = (url: string, data?: any, params?: any): Promise<Result> => {
  return service.request({ url, method: 'post', params, data })
}

export const doDelete = (url: string, params?: any, data?: any): Promise<Result> => {
  return service.request({ url, method: 'delete', params, data })
}

export default service