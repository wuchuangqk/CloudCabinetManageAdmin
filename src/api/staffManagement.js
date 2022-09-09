import request from '@/utils/request'

/**
 * 查询员工信息列表
 * @param {object} data {account：String }
 */
export function queryStaffManagementList (data) {
  return request({
    url: '/cas/employee/queryEmployeeList',
    method: 'post',
    data: data
  })
}

/**
 * 添加员工
 * @param {object}
 * data {
 *  account	  String 帐号
 *  realName	String 姓名
 *  idCardNo	String 身份证号
 * }
 */
export function addEmployee (data) {
  return request({
    url: '/cas/manageEmployee/addEmployee',
    method: 'post',
    data: data
  })
}

/**
 * 删除员工
 * @param {object}
 * data {
 *  account	  String 帐号
 * }
 */
export function removeEmployee (data) {
  return request({
    url: '/cas/manageEmployee/removeEmployee',
    method: 'post',
    data: data
  })
}

/**
 * 设置管理员
 * @param {object}
 * data {
 *  account	  String 帐号
 *  roleType boolean	是否是企业管理员 true:是
 * }
 */
export function setupManager (data) {
  return request({
    url: '/cas/manageEmployee/setupManager',
    method: 'post',
    data: data
  })
}

/**
 * 设置员工在企业中的角色
 * @param {object}
 * data {
 *  account	  String 帐号
 *  companyRoleIds  String	员工在企业下的角色集合（逗号分隔）
 * }
 */
export function setupRoleIdsToCompany (data) {
  return request({
    url: '/cas/manageEmployee/setupRoleIdsToCompany',
    method: 'post',
    data: data
  })
}