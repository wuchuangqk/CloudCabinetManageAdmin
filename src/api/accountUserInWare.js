
// 系统设置 社区站点绑定配置 请求接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表 查询接口
export function queryWareHouseUserList(data){
    return request({
        url: "/csensos/wareHouseuser/queryWareHouseUserList",
        method: "post",
        data: data,
    })
}

// 新增用户无单配置
export function creWareHouseuser(data){
    return request({
        url: "/csensos/wareHouseuser/creWareHouseuser",
        method: "post",
        data: data,
    })
}

// 修改用户无单配置
export function updWareHouseuser(data){
    return request({
        url: "/csensos/wareHouseuser/updWareHouseuser",
        method: "post",
        data:data,
    })
}

// 删除用户无单配置
export function delWareHouseuser(data){
    return request({
        url: "/csensos/wareHouseuser/delWareHouseuser",
        method: "post",
        data:data,
    })
}

/**
 * @param {Object} data
 * 扫码开门距离配置和站点测试开关配置 一起
 */
//查询
export function qryConfig(data){
    return request({
        url: "/csensos/config/qryConfig",
        method: "post",
        data:data,
    })
}

//批量新增
export function creConfig(data){
    return request({
        url: "/csensos/config/creConfig",
        method: "post",
        data:data,
    })
}

//查询
export function delConfig(data){
    return request({
        url: "/csensos/config/delConfig",
        method: "post",
        data:data,
    })
}

/* 站点社区绑定 */

//查询
export function queryList(data){
    return request({
        url: "/cdc/communitystation/queryList",
        method: "post",
        data:data,
    })
}

//按站点绑定新增
export function bind(data){
    return request({
        url: "/cdc/communitystation/bind",
        method: "post",
        data:data,
    })
}

//按社区绑定新增
export function bindes(data){
    return request({
        url: "/cdc/communitystation/bindes",
        method: "post",
        data:data,
    })
}

//删除绑定
export function deletes(data){
    return request({
        url: "/cdc/communitystation/deletes",
        method: "post",
        data:data,
    })
}

export default {
  queryWareHouseUserList,
  creWareHouseuser,
  updWareHouseuser,
  delWareHouseuser
}
