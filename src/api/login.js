import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/cgs/login',
    method: 'post',
    data: params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 修改密码
export function changePassw() {
  return request({
    url: '/cas/password/changePassword',
    method: 'post'
  })
}

// 找回密码
export function findPassword(data) {
  return request({
    url: '/cas/password/findPassword',
    method: 'post',
    data
  })
}

// 企业登录-更新登录缓存信息
export function updateTokenInfo(data) {
  return request({
    url: '/cgs/updateTokenInfo',
    data,
    method: 'post'
  })
}
