import request from '@/utils/request'

//分页查询权限信息
export function queryAuthorityList(params) {
  return request({
    url: '/cgs/authority/queryAuthorityList',
    method: 'post',
    data: params
  })
}

//查询所有系统下面所有模块，树形结构返回
export function queryAllSysModuleForTree(params) {
    return request({
        url: '/cgs/system/queryAllSysModuleForTree',
        method: 'post',
        data: params
    })
}

//保存权限信息
export function saveAuthority(params) {
    return request({
        url: '/cgs/authority/saveAuthority',
        method: 'post',
        data: params
    })
}

//修改权限信息
export function updateAuthority(params) {
    return request({
        url: '/cgs/authority/updateAuthority',
        method: 'post',
        data: params
    })
}

//删除权限信息
export function deleteAuthority(params) {
    return request({
        url: '/cgs/authority/deleteAuthority',
        method: 'post',
        data: params
    })
}


//查询所有系统信息
export function queryAllSystem(params) {
    return request({
        url: '/cgs/system/queryAllSystem',
        method: 'post',
        data: params
    })
}

