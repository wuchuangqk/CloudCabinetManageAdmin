import request from '@/utils/request'

/**
* 获取用户详细信息
* @param {object} data { }
*/
export const accountInfo = data => {
  return request({
    url: '/cas/account/queryAccountInfoDetail',
    method: 'post',
    data: data
  })
}

/**
 * 修改密码
 * @param {object} data {originalPassword:String; newPassword:String}
 */
export const changePwd = data => {
  return request({
    url: '/cas/password/changePassword',
    method: 'post',
    data: data
  })
}

/**
 * 修改昵称
 * @param {object} data {account:String; nickName:String}
 */
export const changeNickName = data => {
  return request({
    url: '/cas/manage/changeNickName',
    method: 'post',
    data: data
  })
}

/**
 * 获取图片验证码
 */
export const getValidateCode = () => {
  return request({
    url: '/cas/common/getValidateCode',
    method: 'post'
  })
}

/**
 * 查询帐号申请状态
 */
export const queryApplyState = data => {
  return request({
    url: '/cas/applyToBe/queryApplyState',
    method: 'post',
    data: data
  })
}

/**
 * 帐号审核列表查询
 */
export const queryApplyList = data => {
  return request({
    url: '/cas/review/queryApplyList',
    method: 'post',
    data: data
  })
}

/**
 * 帐号审核
 */
export const operationSubmit = data => {
  return request({
    url: '/cas/review/operationSubmit',
    method: 'post',
    data: data
  })
}

/**
 * 校验企业简称唯一性
 * @param {object} data {companyCode: String}
 */
export const checkCompanyCode = data => {
  return request({
    url: '/cas/applyToBe/checkCompanyCode',
    method: 'post',
    data: data
  })
}

/**
 * 校验企业编号唯一性
 * @param {object} data {companyNo: String}
 */
export const checkCompanyNo = data => {
  return request({
    url: '/cas/applyToBe/checkCompanyNo',
    method: 'post',
    data: data
  })
}

/**
 * 校验身份证号唯一性
 * @param {object} data {idCardNo: String}
 */
export const checkIdCardNo = data => {
  return request({
    url: '/cas/applyToBe/checkIdCardNo',
    method: 'post',
    data: data
  })
}

/**
 * 实名认证
 * @param {object} data 
 * { validateCode	String		true	图片验证码
 *   validateCodeId	String		true	图片验证码对应id
 *   realName	String		true	姓名
 *   idCardNo	String		true	身份证号
 *   }
 */
export const nameAuthentication = data => {
  return request({
    url: '/cas/applyToBe/realNameAuthentication',
    method: 'post',
    data: data
  })
}

/**
 * 查询申请详细信息
 * @param {object} data  { id: Integer }
 */
export const queryApplyInfo = data => {
  return request({
    url: '/cas/review/queryApplyInfo',
    method: 'post',
    data: data
  })
}

export default {
  changePwd,
  accountInfo,
  getValidateCode,
  changeNickName,
  queryApplyState,
  queryApplyList,
  operationSubmit,
  checkCompanyCode,
  checkCompanyNo,
  checkIdCardNo,
  nameAuthentication,
  queryApplyInfo
}
