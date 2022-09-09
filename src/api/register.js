import request from '@/utils/request'

/**
 * 图片验证码接口
 * @param {object} data {telephone：String }
 */
export const getValidateCode = data => {
  return request({
    url: '/cas/common/getValidateCode',
    method: 'post',
    data: data
  })
}


/**
 * 校验手机号唯一性
 * @param {object} data {telephone：String }
 */
export const checkTelephone = data => {
  return request({
    url: '/cas/checkRegister/checkTelephone',
    method: 'post',
    data: data
  })
}

/**
 * 发送验证码
 * @param {object} data {telephone：String }
 */
export const send = data => {
  return request({
    url: '/cms/message/send',
    method: 'post',
    data: data
  })
}

/**
 * 校验邮箱唯一性
 * @param {object} data {telephone：String }
 */
export const checkEmail = data => {
    return request({
      url: '/cas/checkRegister/checkEmail',
      method: 'post',
      data: data
    })
}

/**
 * 邮件验证码发送
 * @param {object} data {telephone：String }
 */
export const sendEmail = data => {
  return request({
    url: '/cms/message/sendEmail',
    method: 'post',
    data: data
  })
}

/**
 * 邮箱验证码校验
 * @param {object} data {telephone：String }
 */
export const checkEmailCode = data => {
  return request({
    url: '/cms/message/checkEmailCode',
    method: 'post',
    data: data
  })
}

/**
 * 校验企业名称唯一性
 * @param {object} data {id: String}
 */
export const checkCompanyRealName = data => {
  return request({
    url: '/cas/checkRegister/checkCompanyRealName',
    method: 'post',
    data: data
  })
}


/**
 * 校验统一社会信用代码唯一性
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const checkCreditCode = data => {
  return request({
    url: '/cas/checkRegister/checkCreditCode',
    method: 'post',
    data: data
  })
}

/**
 * 校验帐号有效性
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const checkValidAccount = data => {
    return request({
      url: '/cas/checkRegister/checkValidAccount',
      method: 'post',
      data: data
    })
  }

  /**
 * 上传图片uploadFile
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const uploadFile = data => {
  return request({
    url: '/cas/common/uploadFile',
    method: 'post',
    data: data
  })
}

  /**
 * 校验管理员帐号
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const checkManagerAccount = data => {
    return request({
      url: '/cas/checkRegister/checkManagerAccount',
      method: 'post',
      data: data
    })
  }

  /**
 * 注册第一步（个人和企业）
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const baseSave = data => {
    return request({
      url: '/cas/register/baseSave',
      method: 'post',
      data: data
    })
  }

  /**
 * 注册填写企业信息
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const companySave = data => {
    return request({
      url: '/cas/register/companySave',
      method: 'post',
      data: data
    })
  }

   /**
 * 注册提交（个人和企业）
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const accountSave = data => {
  return request({
    url: '/cas/register/accountSave',
    method: 'post',
    data: data
  })
}

/**
 * 个人升级提交
 */
export const personalSubmitApply = data => {
  return request({
    url: '/cas/applyToBe/personalSubmitApply',
    method: 'post',
    data: data
  })
}
/**
 * 企业升级提交
 */
export const companySubmitApply = data => {
  return request({
    url: '/cas/applyToBe/companySubmitApply',
    method: 'post',
    data: data
  })
}
/**
 * 手机验证码校验
 */
export const checkVerifyCode = data => {
  return request({
    url: '/cms/message/checkVerifyCode',
    method: 'post',
    data: data
  })
}
/**
 * 校验图片验证码
 * @param {object} data {validateCode:	String, validateCodeId: String}
 */
export const checkValidateCode = data => {
  return request({
    url: '/cas/common/checkValidateCode',
    method: 'post',
    data: data
  })
}

export default {
  checkTelephone,
  checkEmail,
  checkCompanyRealName,
  checkCreditCode,
  checkValidAccount,
  checkManagerAccount,
  baseSave,
  companySave,
  accountSave,
  getValidateCode,
  send,
  sendEmail,
  checkEmailCode,
  uploadFile,
  personalSubmitApply,
  companySubmitApply,
  checkVerifyCode,
  checkValidateCode
}
