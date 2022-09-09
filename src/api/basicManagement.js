import request from '@/utils/request'

/**
 * 区域信息分页查询(业务区和作业区)
 * @param {object} data { }
 */
export const queryRegionList = data => {
  return request({
    url: '/ces/region/queryRegionList',
    method: 'post',
    data: data
  })
}
/**
 * 新增区域接口
 * @param {object} data { regionName: String, 区域名称
 *                        regionCode: String, 区域代码
 *                        regionType	Integer	区域类型 3
 *                        regionRange	List<Point>	 区域范围
 */
export const addArea = data => {
  return request({
    url: '/ces/region/add',
    method: 'post',
    data: data
  })
}
/**
 * 修改区域接口
 * @param {object} data {}
 */
export const updateArea = data => {
  return request({
    url: '/ces/region/update',
    method: 'post',
    data: data
  })
}
/**
 * 删除区域接口
 * @param {object} data {regionId: 区域ID}
 */
export const deleteArea = data => {
  return request({
    url: '/ces/region/delete',
    method: 'post',
    data: data
  })
}
// 大客户管理模块
/**
 * 查询大客户列表
 * @param {object} data {}
 */
export const queryAccountVipList = data => {
  return request({
    url: '/cas/vip/queryAccountVipList',
    method: 'post',
    data: data
  })
}

/**
 * 新增大客户
 * @param {object} data {account	String		true	企业账号}
 */
export const addAccount = data => {
  return request({
    url: '/cas/vip/add',
    method: 'post',
    data: data
  })
}
/**
 * 删除大客户
 * @param {object} data {id	Integer		true	大客户id}
 */
export const removeAccount = data => {
  return request({
    url: '/cas/vip/remove',
    method: 'post',
    data: data
  })
}
/**
 * 更新大客户
 * @param {object} data {account	String		true	企业账号}
 */
export const updateAccount = data => {
  return request({
    url: '/cas/vip/update',
    method: 'post',
    data: data
  })
}
/**
 * 临时网点管理
 * @param {object} data {}
 */
export const queryShops = data => {
  return request({
    url: '/businessShop/queryShops',
    method: 'post',
    data: data
  })
}

export default {
  queryRegionList,
  addArea,
  updateArea,
  deleteArea,
  queryAccountVipList,
  addAccount,
  removeAccount,
  updateAccount,
  queryShops
}
