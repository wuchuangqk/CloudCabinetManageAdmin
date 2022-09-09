import request from '@/utils/request'

/**
 * 系统权限列表查询
 * @param {objext} params {systemId:Integer, offset:Integer, limit:Integer}
 */
export const queryBindSysAuthority = data => {
  return request({
    url: '/cgs/system/queryBindSysAuthority',
    method: 'post',
    data: data
  })
}

/**
 * 系统解除绑定权限
 * @param {objext} params {sysId: Integer, authorityId: Integer}
 */
export const unBindSysAuthority = data => {
  return request({
    url: '/cgs/system/unBindSysAuthority',
    method: 'post',
    data: data
  })
}

/**
 * 系统绑定权限
 * @param {objext} params {sysId: Integer, authorityId: List<Integer >}
 */
export const bindSysAuthority = data => {
  return request({
    url: '/cgs/system/bindSysAuthority',
    method: 'post',
    data: data
  })
}

export default {
  queryBindSysAuthority,
  unBindSysAuthority,
  bindSysAuthority
}

