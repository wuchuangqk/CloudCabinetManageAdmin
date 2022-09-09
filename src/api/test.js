import request from '@/utils/request'

//获取验证码
export const getTestNumber = data => {
    return request({
      url: '/cms/message/send',
      method: 'post',
      data: data
    })
}

//忘记密码
export const forgetPwd = data => {
    return request({
        url: '/cas/password/findPassword',
        method : 'post',
        data : data
    })
}

export default {
    getTestNumber,
    forgetPwd
}