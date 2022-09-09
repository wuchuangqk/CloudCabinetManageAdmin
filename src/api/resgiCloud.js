import request from "@/utils/request"

/**
 * 站点备案
 * 数据
 */

export function resCloud(data) {
  return request({
    url:"csensos/wareHouse/queryWareHouseList",
    method:"post",
    data:data
  })
}

/**
 * 新增云仓
 */

export function addCloud(data) {
  return request({
    url: "csensos/wareHouse/creWareHouse",
    method:"post",
    data:data
  })
}

/**
 * 删除云仓
 */

export function delCloud(data) {
  return request({
    url: "csensos/wareHouse/delWareHouse",
    method:"post",
    data:data
  })
}

/**
 * 按ID查询云仓接口
 * id     云仓ID   参数
 *
 */

export function selectIdCloud(data) {
  return request({
    url: "csensos/wareHouse/findWareHouseById",
    method:"post",
    data:data
  })
}


/**
 * 按code查询云仓接口
 * wareHouseCode    云仓编号   参数
 *
 */

export function selectCodeCloud(data) {
  return request({
    url: "csensos/wareHouse/findWareHouseByCode",
    method:"post",
    data:data
  })
}

/**
 * 修改云仓
 * id                    云仓id                参数
 * warehouseCode         云仓编号              参数
 * warehouseName         云仓名称              参数
 * province              云仓所在省            参数
 * city                  云仓所在城市          参数
 * county                云仓所在区县          参数
 * address               云仓详细地址          参数
 * longitude             云仓地址经度          参数
 * latitude              云仓地址维度          参数
 * comment               备注                 参数
 * isDel                 是否删除              参数
 * isOnline              是否在线              参数
 *
 */

export function editCloud(data) {
  return request({
    url: "csensos/wareHouse/upWareHouse",
    method:"post",
    data:data
  })
}

/**
 * 设置云仓是否在线接口
 * warehouseId  云仓ID          参数
 * isOnline     云仓是否在线
 */

export function resOnLine(data) {
  return request({
    url:"csensos/wareHouse/warehouseSetOnline",
    method:"post",
    data:data
  })
}

// 清除数据
export function cleData(data){
    return request({
        url: "csensos/door/clearopendoor",
        method: "post",
        data: data,
    })
}
// 强制开门 sysopendoor
export function openData(data){
    return request({
        url: "csensos/door/opendoor",
        method: "post",
        data: data,
    })
}

// 新报警和处理中数值统计
export function qryGroupMonitor(data){
    return request({
        url: "cwms/monitor/qryGroupMonitor",
        method: "post",
        data: data,
    })
}



// 监控右边栏地址
export function queryWareHouseDisList(data){
    return request({
        url: "csensos/wareHouse/queryWareHouseDisList",
        method: "post",
        data: data,
    })
}
