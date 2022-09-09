import request from "@/utils/request"


/**
 * 地址库
 * 数据
 */

export function resAddress(data) {
  return request({
    url:"cmaps/address/comaddressqry",
    method:"post",
    data:data
  })
}

/**
 * 查询
 * 数据
 */

export function resSearch(data) {
  return request({
    url:"cmaps/address/search",
    method:"post",
    data:data
  })
}

/**
 * 新增
 * 数据
 */

export function resAdd(data) {
  return request({
    url:"cmaps/address/comaddresscre",
    method:"post",
    data:data
  })
}


/**
 * 修改
 * 数据
 */

export function resEdit(data) {
  return request({
    url:"cmaps/address/comaddressupd",
    method:"post",
    data:data
  })
}

/**
 * 删除
 * 数据
 */

export function resDel(data) {
  return request({
    url:"cmaps/address/comaddressdel",
    method:"post",
    data:data
  })
}
