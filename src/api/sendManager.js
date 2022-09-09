import request from '@/utils/request'

/**
 * 已分发上架订单
 */
export function resSend(data) {
  return request({
    url:"/cwbs/mgrinorder/queryInOrderList",
    method:"post",
    data:data
  })
}

/**
 * 已分发下架订单
 */
export function resHave(data) {
  return request({
    url:"/cwbs/mgroutorder/queryOutOrderList",
    method:"post",
    data:data
  })
}


/**
 * 站内管理的库存管理列表
 */
export function resCont(data) {
  return request({
    url:"/cwbs/invent/findInventMgr",
    method:"post",
    data:data
  })
}

/**
 * 站内管理的储位管理列表
 */
export function resSeat(dataSeat) {
  return request({
    url:"csensos/locat/queryLocationAndOrderList",
    method:"post",
    data:dataSeat
  })
}

/**
 * 站内管理的操作异常列表
 */
export function resAbnormal(dataAbnormal) {
  return request({
    url:"cwbs/oppickLog/findOpLogMgr",
    method:"post",
    data:dataAbnormal
  })
}

/**
 * 站内管理的操作异常解除
 */
export function resAbnormalDel(data) {
  return request({
    url:"/cwbs/oppickLog/inputOpexcepOrder",
    method:"post",
    data:data
  })
}

/**
 * 站内管理中查看详情上架日志
 */
export function resFindPutWay(data) {
  return request({
    url:"/cwbs/opexcepmgrorder/findPutWay",
    method:"post",
    data:data
  })
}

/**
 * 站内管理中查看详情上架储位变更
 */
export function resFindPutChange(data) {
  return request({
    url:"/cwbs/opexcepmgrorder/findPutChange",
    method:"post",
    data:data
  })
}

/**
 * 站内管理中查看详情操作异常
 */
export function resOpexcepRecord(data) {
  return request({
    url:"/cwbs/opexcepmgrorder/opexcepRecord",
    method:"post",
    data:data
  })
}

/**
 * 站内管理中查看详情分发日志
 */
export function resDistributelog(data) {
  return request({
    url:"/dispatch/distrbute/distributelog",
    method:"post",
    data:data
  })
}

/**
 * 站内管理中查看详情下架日志
 */
export function resPickRecord(data) {
  return request({
    url:"/cwbs/opexcepmgrorder/pickRecord",
    method:"post",
    data:data
  })
}

/**
 * 进站出站数据管理查询接口
 * warehouseId  站点id
 * accountId   帐户id
 * private Integer putPick;
 *  0上架
 *  1下架
 *  2操作异常
 */
export function resFindPutPickList(data) {
  return request({
    url:"/cwbs/clearData/findPutPickList",
    method:"post",
    data:data
  })
}
/**
 * 一件多单上架
 *
 * */
export function queryInOrderViewList(data) {
  return request({
    url:"/cwbs/mgrinorder/queryInOrderViewList",
    method:"post",
    data:data
  })
}

/**
 * 一件多单下架
 *
 * */
export function queryOutViewOrderList(data) {
  return request({
    url:"/cwbs/mgroutorder/queryOutViewOrderList",
    method:"post",
    data:data
  })
}

/**
 * 新版上架订单分发接口
 *
 * */
export function bindStation(data) {
  return request({
    url:"/cwbs/bindorderstation/bindStation",
    method:"post",
    data:data
  })
}

/**
 * 新版上架订单查看站点接口
 *
 * */
export function findBindStation(data) {
  return request({
    url:"/cwbs/bindorderstation/findBindStation",
    method:"post",
    data:data
  })
}
