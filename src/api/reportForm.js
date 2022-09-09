import request from '@/utils/request'

/**
 * 报价流水帐单
 */
export function resForm(data) {
    return request({
        url: "/cwcs/mgrstatement/queryStatementList",
        method: "post",
        data: data
    })
}

/**
 * 客户账期表
 */
export function resAcounts(data) {
    return request({
        url: "/cwcs/cusacctPeriod/queryList",
        method: "post",
        data: data
    })
}

/**
 * 客户账期核销
 */
export function resWriteOff(data) {
    return request({
        url: "/cwcs/cusacctPeriod/upVerifi",
        method: "post",
        data: data
    })
}

/**
 * 客户账期详情
 */
export function resMessage(dataNum) {
    return request({
        url: "/cwcs/cusacctPeriod/queryStatementByperiodList",
        method: "post",
        data: dataNum
    })
}


/**
 * @param {Object} data
 * 列表信息
 */
export function clientInfo(data) {
    return request({
        url: "cas/customer/queryCustomerList",
        method: "post",
        data: data
    })
}

/**
 *
 * 进站出站列表信息
 */
export function resInfo(dataNum) {
    return request({
        url: "csensos/door/querylist",
        method: "post",
        data: dataNum
    })
}

/**
 *
 * 进站出站搜索省市區站點id
 */
export function resWouseId(data) {
    return request({
        url: "csensos/wareHouse/queryWareHouseList",
        method: "post",
        data: data
    })
}

//获取表格默认列表--进站出站用户列表
export function clientUsers(dataTel) {
    return request({
        url: "/cas/account/queryPersonalAccountList",
        method: "post",
        data: dataTel,
    })
}
//获取表格默认列表--进站出站用户列表--搜索框数据
export function clientUsersInfo(dataTel) {
    return request({
        url: "/cas/account/queryPersonalAccountList",
        method: "post",
        data: dataTel,
    })
}


/**
 *
 * 站点离线报表列表信息
 */
export function resOnlineList(data) {
    return request({
        url: "csensos/wareHouseOnline/queryWareHouseOnlineList",
        method: "post",
        data: data
    })
}

/**
 *
 * 站点离线报表列表信息左侧搜索
 */
export function resOnlineLists(data) {
    return request({
        url: "csensos/wareHouseOnline/queryWareHouseOnlineList",
        method: "post",
        data: data
    })
}

/**
 * 站点备案
 * 数据
 */

export function resCloud(dataNum) {
    return request({
        url: "csensos/wareHouse/queryWareHouseList",
        method: "post",
        data: dataNum
    })
}

/**
 * 附近的站点
 * 数据
 */

export function resCloudList(data) {
    return request({
        url: "cwbs/nearhouse/getLocationUseByHouseCode",
        method: "post",
        data: data
    })
}

/**
 * 站点分布地图详情
 * 数据
 */

export function resQry(dataAbnor) {
    return request({
        url: "cwms/monitor/qryMonitor",
        method: "post",
        data: dataAbnor
    })
}

/**
 * 站点分布地图详情领取
 * 数据
 */

export function resQryOrder(data) {
    return request({
        url: "cwms/monitor/UpdGetErMonitor",
        method: "post",
        data: data
    })
}

/**
 * 报警处理
 * 数据
 */

export function resQrys(dataAbnor) {
    return request({
        url: "cwms/monitor/qryMonitor",
        method: "post",
        data: dataAbnor
    })
}

/**
 * 报警处理关闭
 * 数据
 */

export function resUpdCloErOrder(data) {
    return request({
        url: "cwms/monitor/UpdCloErMonitor",
        method: "post",
        data: data
    })
}

/**
 * 报警处理分配
 * 数据
 */

export function resUpdMakErOrder(data) {
    return request({
        url: "cwms/monitor/UpdMakErMonitor",
        method: "post",
        data: data
    })
}

/**
 * 当前在站人员
 */

export function addUserindoor(data) {
    return request({
        url: "csensos/door/userindoor",
        method: "post",
        data: data
    })
}

/**
 * 进站出站数据管理
 */

export function MarkData(data) {
    return request({
        url: "csensos/door/queryclearlist",
        method: "post",
        data: data
    })
}

/**
 * 异常开门记录
 * 数据
 */

export function resLogopendoor(data) {
    return request({
        url: "csensos/door/logopendoor",
        method: "post",
        data: data
    })
}

/**
 * 公司及快递员关系备案
 * 快递员/快递公司
 */

export function clientUsersAdd(data) {
    return request({
        url: "/cas/account/findCompayPerson",
        method: "post",
        data: data
    })
}