import request from '@/utils/request'

// 分页查询省份信息
export function queryProvinceList(params) {
  return request({
    url: '/cdc/province/queryProvinceList',
    method: 'post',
    data: params
  })
}

// 分页查询城市信息
export function queryCityList(params) {
  return request({
    url: '/cdc/city/queryCityList',
    method: 'post',
    data: params
  })
}

// 保存城市信息
export function insertCity(params) {
  return request({
    url: '/cdc/city/insertCity',
    method: 'post',
    data: params
  })
}

// 修改城市信息
export function updateCityInfo(params) {
  return request({
    url: '/cdc/city/updateCityInfo',
    method: 'post',
    data: params
  })
}

// 删除城市信息
export function deleteCity(params) {
  return request({
    url: '/cdc/city/deleteCity',
    method: 'post',
    data: params
  })
}

// 分页查询区县信息
export function queryCountyList(params) {
  return request({
    url: '/cdc/county/queryCountyList',
    method: 'post',
    data: params
  })
}
// 新增区县信息
export function saveCounty(params) {
  return request({
    url: '/cdc/county/saveCounty',
    method: 'post',
    data: params
  })
}
// 修改区县信息
export function updateCounty(params) {
  return request({
    url: '/cdc/county/updateCounty',
    method: 'post',
    data: params
  })
}

// 删除区县信息
export function deleteCounty(params) {
  return request({
    url: '/cdc/county/deleteCounty',
    method: 'post',
    data: params
  })
}

// 分页查询乡镇街道信息
export function queryTownList(params) {
  return request({
    url: '/cdc/town/queryTownList',
    method: 'post',
    data: params
  })
}


//新增乡镇街道信息
export function saveTown(params) {
  return request({
    url: '/cdc/town/saveTown',
    method: 'post',
    data: params
  })
}

//修改乡镇街道信息
export function updateTown(params) {
  return request({
    url: '/cdc/town/updateTown',
    method: 'post',
    data: params
  })
}

//删除乡镇街道信息
export function deleteTown(params) {
  return request({
    url: '/cdc/town/deleteTown',
    method: 'post',
    data: params
  })
}

// 分页查询字典信息
export function queryDictList(params) {
  return request({
    url: '/cdc/dict/queryDictList',
    method: 'post',
    data: params
  })
}

// 获取所有系统信息
export function queryAllSystem(params) {
  return request({
    url: '/cgs/system/queryAllSystem',
    method: 'post',
    data: params
  })
}

// 保存字典信息
export function saveDict(params) {
  return request({
    url: '/cdc/dict/saveDict',
    method: 'post',
    data: params
  })
}

// 修改字典信息
export function updateDict(params) {
  return request({
    url: '/cdc/dict/updateDict',
    method: 'post',
    data: params
  })
}

// 删除字典信息
export function deleteDict(params) {
  return request({
    url: '/cdc/dict/deleteDict',
    method: 'post',
    data: params
  })
}

// 分页查询字典值信息
export function queryDictValueList(params) {
  return request({
    url: '/cdc/dict/queryDictValueList',
    method: 'post',
    data: params
  })
}

//新增字典值的信息
export function saveDictValue(params) {
  return request({
    url: '/cdc/dict/saveDictValue',
    method: 'post',
    data: params
  })
}

//修改字典值的信息
export function updateDictValue(params) {
  return request({
    url: '/cdc/dict/updateDictValue',
    method: 'post',
    data: params
  })
}

// 删除字典数值信息
export function deleteDictValue(params) {
  return request({
    url: '/cdc/dict/deleteDictValue',
    method: 'post',
    data: params
  })
}

// 分页查询系统信息
export function querySystemList(params) {
  return request({
    url: '/cgs/system/querySystemList',
    method: 'post',
    data: params
  })
}

// 保存系统信息
export function saveSystem(params) {
  return request({
    url: '/cgs/system/saveSystem',
    method: 'post',
    data: params
  })
}

// 更新系统信息
export function updateSystem(params) {
  return request({
    url: '/cgs/system/updateSystem',
    method: 'post',
    data: params
  })
}

// 删除系统信息
export function deleteSystem(params) {
  return request({
    url: '/cgs/system/deleteSystem',
    method: 'post',
    data: params
  })
}

//系统权限扫描
export function scanAuthority(params) {
  return request({
    url: '/cgs/system/scanAuthority',
    method: 'post',
    data: params
  })
}

// 绑定权限禁用
export function bindSysAuthority(params) {
  return request({
    url: '/cgs/system/bindSysAuthority',
    method: 'post',
    data: params
  })
}

// 系统解除绑定权限
export function unBindSysAuthority(params) {
  return request({
    url: '/cgs/system/unBindSysAuthority',
    method: 'post',
    data: params
  })
}

// 分页查询角色信息
export function queryRoleList(params) {
  return request({
    url: '/cgs/role/queryRoleList',
    method: 'post',
    data: params
  })
}

// //分页查询角色绑定权限列表
export function queryBindAuthority(params) {
  return request({
    url: '/cgs/role/queryBindAuthority',
    method: 'post',
    data: params
  })
}

// 分页查询模块信息
export function queryModuleList(params) {
  return request({
    url: '/cgs/module/queryModuleList',
    method: 'post',
    data: params
  })
}

// 新增保存角色信息
export function saveRole(params) {
  return request({
    url: '/cgs/role/saveRole',
    method: 'post',
    data: params
  })
}

// 保存模块信息
export function saveModule(params) {
  return request({
    url: '/cgs/module/saveModule',
    method: 'post',
    data: params
  })
}

// 修改角色信息
export function updateRole(params) {
  return request({
    url: '/cgs/role/updateRole',
    method: 'post',
    data: params
  })
}

// 更新模块信息
export function updateModule(params) {
  return request({
    url: '/cgs/module/updateModule',
    method: 'post',
    data: params
  })
}

// 角色绑定模块
export function bindModule(params) {
  return request({
    url: '/cgs/role/bindModule',
    method: 'post',
    data: params
  })
}

// 角色解绑模块
export function unBindModule(params) {
  return request({
    url: '/cgs/role/unBindModule',
    method: 'post',
    data: params
  })
}

// 角色绑定权限
export function bindAuthority(params) {
  return request({
    url: '/cgs/role/bindAuthority',
    method: 'post',
    data: params
  })
}

// 角色解除绑定权限
export function unBindAuthority(params) {
  return request({
    url: '/cgs/role/unBindAuthority',
    method: 'post',
    data: params
  })
}

// 删除模块信息
export function deleteModule(params) {
  return request({
    url: '/cgs/module/deleteModule',
    method: 'post',
    data: params
  })
}

// 删除角色信息
export function deleteRole(params) {
  return request({
    url: '/cgs/role/deleteRole',
    method: 'post',
    data: params
  })
}
/**
 * 角色模块 添加账号接口
 * @param {Object} params account,roleId
 */
export function addAccountRole(params) {
  return request({
    url: '/cas/manage/addAccountRole',
    method: 'post',
    data: params
  })
}

// 模块信息查询
export function queryModuleInfo(params) {
  return request({
    url: '/cgs/module/queryModuleInfo',
    method: 'post',
    data: params
  })
}

// 查询所有角色信息
export function queryAllRole(params) {
  return request({
    url: '/cgs/role/queryAllRole',
    method: 'post',
    data: params
  })
}

// 功能模块
// 查询所有功能信息
export function queryFunctionList(params) {
  return request({
    url: '/cgs/function/queryFunctionList',
    method: 'post',
    data: params
  })
}

// 保存功能信息
export function saveFunction(params) {
  return request({
    url: '/cgs/function/saveFunction',
    method: 'post',
    data: params
  })
}

// 修改功能信息
export function updateFunction(params) {
  return request({
    url: '/cgs/function/updateFunction',
    method: 'post',
    data: params
  })
}

// 删除功能信息
export function deleteFunction(params) {
  return request({
    url: '/cgs/function/deleteFunction',
    method: 'post',
    data: params
  })
}

// 查询模块已绑定角色
export function queryModuleBindRoles(params) {
  return request({
    url: '/cgs/module/queryModuleBindRoles',
    method: 'post',
    data: params
  })
}

//根据系统Id查询信息
export function querySysInfoById(params) {
  return request({
    url: '/cgs/system/querySysInfoById',
    method: 'post',
    data: params
  })
}

