import request from "@/utils/request"


/**
 * 云仓设备
 * 数据
 */

export function resMade(data) {
  return request({
    url:"csensos/equipment/queryEquipmentList",
    method:"post",
    data:data
  })
}

/**
 * 新增云仓设备
 * 数据
 *
 * warehouseId    云仓id
 * equipmentCode  设备编号
 * equipmentName  设备名称
 * specification  设备型号
 * type            设备类型
 * price           设备价格
 * quantity        设备数量，默认为1
 * comment         备注
 */

export function addMade(data) {
  return request({
    url:"csensos/equipment/creEquipment",
    method:"post",
    data:data
  })
}

/**
 * 修改云仓设备
 * 数据
 * id             设备id
 * warehouseId    云仓id
 * equipmentCode  设备编号
 * equipmentName  设备名称
 * specification  设备型号
 * type            设备类型
 * price           设备价格
 * quantity        设备数量，默认为1
 * comment         备注
 * operator        操作人
 * operatortime    操作时间
 * isDel           是否删除
 *
 */

export function editMade(data) {
  return request({
    url:"csensos/equipment/upEquipment",
    method:"post",
    data:data
  })
}

/**
 * 删除云仓设备
 * 数据
 * id
 */

export function delMade(data) {
  return request({
    url:"csensos/equipment/delEquipment",
    method:"post",
    data:data
  })
}
