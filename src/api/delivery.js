import request from "@/utils/request"

/**
 * 派件管理
 * 数据
 */

/*
查询接口
 */
export function qryOrder(data) {
  return request({
    url:"delivery/deliorder/qryOrder",
    method:"post",
    data:data
  })
}

/*
派送日志接口 派件详情接口
 */
export function querylist(data) {
  return request({
    url:"delivery/deliperformer/querylist",
    method:"post",
    data:data
  })
}

/*
查询包裹号
 */
export function qryOrderParcel(data) {
  return request({
    url:"delivery/orderparcel/qryOrderParcel",
    method:"post",
    data:data
  })
}
