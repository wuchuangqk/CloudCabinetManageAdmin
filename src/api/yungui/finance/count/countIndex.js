import request from "@/utils/request" //引入axios请求方法

/**
 * 结算管理-管理费
 * @param {*} data 
 * @returns 
 */
export function findcabinetBillApi(data) {
    return request({
        url: "/cwcs/cabinetorderbill/findcabinetBill",
        method: "post",
        data: data,
    })
}

/**
 * 结算管理-系统使用费
 * @param {*} data 
 * @returns 
 */
export function findOrderFeeApi(data) {
    return request({
        url: "/cwcs/cabinetorderFee/findOrderFee",
        method: "post",
        data: data,
    })
}

/**
 * 投柜业务量统计-查询
 * @param {*} data 
 * @returns 
 */
export function IncabinetBusinessOfsumApi(data) {
    return request({
        url: "/cabinet/statistics/IncabinetBusinessOfsum",
        method: "post",
        data: data,
    })
}

/**
 * 投柜业务量统计-查询详情
 * @param {*} data 
 * @returns 
 */
export function querylistInfoApi(data) {
    return request({
        url: "/cabinet/incabinet/querylist",
        method: "post",
        data: data,
    })
}

/**
 * 投柜订单明细-查询
 * @param {*} data 
 * @returns 
 */
export function touguiOrderQuerylistApi(data) {
    return request({
        url: "/cabinet/incabinet/querylist",
        method: "post",
        data: data,
    })
}

/**
 * 取件业务量统计-查询
 * @param {*} data 
 * @returns 
 */
export function InExpressBusinessOfsumApi(data) {
    return request({
        url: "/cabinet/statistics/InExpressBusinessOfsum",
        method: "post",
        data: data,
    })
}

/**
 * 寄件订单明细-查询
 * @param {*} data 
 * @returns 
 */
export function querylistJorderTableApi(data) {
    return request({
        url: "/cabinet/inexpress/querylist",
        method: "post",
        data: data,
    })
}

/**
 * 加盟商结算配置查询
 * @param {*} data 
 * @returns 
 */
export function findFranchCabinetShareApi(data) {
    return request({
        url: "/cas/franchshare/findFranchCabinetShare",
        method: "post",
        data: data,
    })
}

/**
 * 格式化日期
 * @param {*} fmt 
 * @param {*} date 
 * @returns 
 */
export function dateFormatTimeApi(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(
                ret[1],
                ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
            );
        }
    }
    return fmt;
}