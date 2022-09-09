import request from "@/utils/request"


/**
 * 云仓储位
 * 数据
 */

export function resSave(data) {
  return request({
    url:"csensos/locat/queryLocationList",
    method:"post",
    data:data
  })
}

/**
 * 云仓储位批量
 * 数据
 */

export function resSaveMore(data) {
  return request({
    url:"csensos/locat/queryCheckLocationList",
    method:"post",
    data:data
  })
}

/**
 * 按云仓ID查询储位占用情况接口
 * warehouseId   云仓ID 参数
 */

export function resSaveId(data) {
  return request({
    url:"csensos/locat/queryLocationGroup",
    method:"post",
    data:data
  })
}

/**
 * 按ID查询储位接口
 * id   储位ID 参数
 */

export function resId(data) {
  return request({
    url:"csensos/locat/findByIdLocation",
    method:"post",
    data:data
  })
}

/**
 * 修改储位
 * 参数
 * id                           储位id
 * warehouseId                  云仓id
 * cabinetCode                  柜号
 * locationType                 储位类型
 * locationCode                 储位编号
 * comment                      备注
 * isDel                        储位是否删除
 * isUse                        储位是否占用
 */

export function resEdit(data) {
  return request({
    url:"csensos/locat/upLocation",
    method:"post",
    data:data
  })
}

/**
 * 删除
 * id   储位ID 参数
 */

export function resDel(data) {
  return request({
    url:"csensos/locat/delLocation",
    method:"post",
    data:data
  })
}

/**
 * 新增
 * warehouseCode                云仓编号              参数
 * cabinetCode                  柜号                  参数
 * locationType                 储位类型               参数
 * locationCode                 储位编号               参数
 * comment                      备注                   参数
 */

export function resAdd(data) {
  return request({
    url:"csensos/locat/creLocat",
    method:"post",
    data:data
  })
}

/**
 * 批量新增
 * warehouseId                 云仓id              参数
 * batchLists                   批量参数
 * cabinetCode                  柜号                  参数
 * locationType                 储位类型               参数
 * qty                          数量               参数
 * comment                      备注                   参数
 *
 */

export function resAddMore(data) {
  return request({
    url:"csensos/locat/creBatchLocat",
    method:"post",
    data:data
  })
}


/**
 * 地图订单详情储位展示
 * 数据
 */

export function queryVisualLocationList(data) {
  return request({
    url:"csensos/locat/queryVisualLocationList",
    method:"post",
    data:data
  })
}

/**
 * 地图订单详情储位展示中的订单详情
 * 数据 参数: 订单id    long orderId
 */

export function findByOrderId(data) {
  return request({
    url:"cwbs/orderbyltc/findByOrderId",
    method:"post",
    data:data
  })
}


/**
 * 站内管理订单号查询订单详情
 * 数据 参数: 订单billSettleId    billSettleId
 */

export function queryInfoByBillSetId(data) {
  return request({
    url:"cwbs/mgrinorder/queryInfoByBillSetId",
    method:"post",
    data:data
  })
}


/**
 * 通讯测试
 * 数据 参数:  warehouseId  private List<Long> locationIds brightype 1 亮灯 0 关灯 -1 失败
 */

export function brightLocation(data) {
  return request({
    url:"csensos/locat/BrightLocation",
    method:"post",
    data:data
  })
}
