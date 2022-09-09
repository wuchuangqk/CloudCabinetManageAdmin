import request from '@/utils/request'

/**
 * 图片验证码接口
 * @param {object} data {telephone：String }
 */
export const getWgdxcomCode = data => {
  return request({
    url: '/wstationwx/wx/redirect/greetUsersOpenId',
    method: 'post',
    data: data
  })
}

//绑定手机号
export const bindPhone = data => {
  return request({
    url: '/wstationwx/wx/redirect/greet/binduser',
    method: 'post',
    data: data
  })
}

//解绑
export const unBindPhone = data => {
  return request({
    url: '/wstationwx/wx/redirect/greet/unbinduser',
    method: 'post',
    data: data
  })
}
