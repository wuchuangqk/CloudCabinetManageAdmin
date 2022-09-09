import request from "@/utils/request" //引入axios请求方法

/**
 * 基础数据管理->加盟商系统设置管理->业务报价管理  列表接口
 */
export function findQuoteApi(data) {
    return request({
        url: "/cwcs/quote/findQuote",
        method: "post",
        data: data
    })
}

/**
 * 基础数据管理->加盟商系统设置管理->寄件报价管理  列表接口
 */

export function mailQuoteApi(data) {
    return request({
        url: "/cwcs/quote/findQuote",
        method: "post",
        data: data

    })
}

/**
 * 结算及支付管理->业务收支明细  列表接口
 */

export function businessDetailApi(data) {
    return request({
        url: "/cwcs/smgr/queryMgrStatementList",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->加盟商管理->加盟商业务分成设置->查询加盟商分成列表  列表接口
 */
export function ranchiseeShareApi(data) {
    return request({
        url: "/cas/franchshare/findFranchList",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->加盟商管理->加盟商业务分成设置->加盟商设置分成比例  列表接口
 */
export function setRanchiseeShareApi(data) {
    return request({
        url: "/cas/franchshare/setFranchShare",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->加盟商管理->加盟商业务分成设置->获取加盟商站点分成列表  列表接口
 */
export function findFranchStationShareApi(data) {
    return request({
        url: "/cas/franchshare/findFranchCabinetShare",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->加盟商管理->加盟商业务分成设置->设置站点分成比例  列表接口
 */
export function setFranchStationShareApi(data) {
    return request({
        url: "/cas/franchshare/setFranchCabinetShare",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>加盟商保证金管理查询列表  列表接口
 */
export function franchDepositApi(data) {
    return request({
        url: "/cas/franchDeposit/depoFranch",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>收费/退费表格数据获取  列表接口
 */
export function queryFranchDepositApi(data) {
    return request({
        url: "/cps/deposits/queryFranchDeposit",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>收费  列表接口
 */
export function inDepositApi(data) {
    return request({
        url: "/cps/depositset/deposit",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>退费  列表接口
 */
export function outDepositApi(data) {
    return request({
        url: "/cps/depositset/deposit",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>保证金查询  列表接口
 */
export function findFranchDepositApi(data) {
    return request({
        url: "/cps/deposits/findFranchDeposit",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->业务报价管理>优惠收费配置 查  列表接口
 */
export function getDiscountTableApi(data) {
    return request({
        url: "/cwcs/promotion/findPromotionMgrList",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->业务报价管理>优惠收费配置 增  列表接口
 */
export function addDiscountDataApi(data) {
    return request({
        url: "/cwcs/promotion/addPromice",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->业务报价管理>优惠收费配置 改  列表接口
 */
export function setDiscountDataApi(data) {
    return request({
        url: "/cwcs/promotion/editPromice",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->业务报价管理>优惠收费配置 删  列表接口
 */
export function delDiscountDataApi(data) {
    return request({
        url: "/cwcs/promotion/deletePromice",
        method: "post",
        data: data

    })
}

/**
 * 管理员登陆模块->财务管理>加盟商结算管理>业务对账单
 */
export function BussinessBookApi(data) {
    return request({
        url: "/cwcs/businessStatement/findBusinessBillMgr",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜授权码管理>列表查询
 */
export function getCodeSystemSetApi(data) {
    return request({
        url: "/cabinet/comcertesp/querylist",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜授权码管理>新增
 */
export function getCodeSystemSetAddApi(data) {
    return request({
        url: "/cabinet/comcertesp/addCertigierEspecial",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜授权码管理>删除
 */
export function delCodeSystemSetApi(data) {
    return request({
        url: "/cabinet/comcertesp/delCertigierEspecial",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜使用授权设置>列表查询
 */
export function useCodeSystemSetApi(data) {
    return request({
        url: "/cabinet/sedrec/querylist",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜使用授权设置>新增
 */
export function addUseCodeSystemSetApi(data) {
    return request({
        url: "/cabinet/sedrec/addSendReceive",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->交接柜使用授权设置>删除
 */
export function delUseCodeSystemSetApi(data) {
    return request({
        url: "/cabinet/sedrec/delSendReceive",
        method: "post",
        data: data

    })
}

/**
 * 后台管理->云柜订单管理>交接柜订单管理
 */
export function handoverCabinetApi(data) {
    return request({
        url: "/cabinet/espcab/querylist",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->加盟商系统设置管理>取件递送员设置
 */
export function setCourierPersonApi(data) {
    return request({
        url: "/cabinet/sedrec/querylist",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->加盟商系统设置管理>取件递送员设置
 */
export function setCourierAddInfoApi(data) {
    return request({
        url: "/cabinet/sedrec/addSendReceive",
        method: "post",
        data: data

    })
}

/**
 * 加盟商->加盟商系统设置管理>取件递送员设置-删除按钮
 */
export function delCourierAddInfoApi(data) {
    return request({
        url: "/cabinet/sedrec/delSendReceive",
        method: "post",
        data: data

    })
}

/**
 * 查看取件码
 */
export function lookCodeApi(data) {
    return request({
        url: "/cabinet/public/getPWD",
        method: "post",
        data: data

    })
}

/**
 * 重发信息
 */
export function reSendApi(data) {
    return request({
        url: "/cabinet/public/stockInpushMessageAgain",
        method: "post",
        data: data

    })
}


/**
 * 修改手机号
 */
export function changeTelApi(data) {
    return request({
        url: "/cabinet/incabinet/setReceiveTel",
        method: "post",
        data: data

    })
}

/**
 * 异常处理
 */
export function dealOrderlApi(data) {
    return request({
        url: "/cabinet/outcabinet/ModifyIncabinet",
        method: "post",
        data: data

    })
}

/**
 * 历史订单查询
 */
export function historyLookApi(data) {
    return request({
        url: "/cabinet/orderlog/qryOrderInfo",
        method: "post",
        data: data

    })
}

/**
 * 点击展示备注
 */
export function showMemoApi(data) {
    return request({
        url: "/cabinet/orderremark/qryOrderRemark",
        method: "post",
        data: data

    })
}

/**
 * 编辑新增备注
 */
export function addMemoApi(data) {
    return request({
        url: "/cabinet/orderremark/addOrderRemark",
        method: "post",
        data: data

    })
}

/**
 * 快递公司对接
 */
export function pushExpApi(data) {
    return request({
        url: "/cabinet/public/pushExpMessageAgain",
        method: "post",
        data: data

    })
}

/**
 * 快递公司对接-新增
 */
export function expBeiAnAddApi(data) {
    return request({
        url: "/cas/customer/creCustomer",
        method: "post",
        data: data

    })
}

/**
 * 快递公司对接-编辑
 */
export function expBeiAnEditApi(data) {
    return request({
        url: "/cas/customer/upCustomer",
        method: "post",
        data: data

    })
}

/**
 * 设置格口状态
 */
export function setGekouStatusApi(data) {
    return request({
        url: "/cabinet/cabinetdtl/setStatusByDtlId",
        method: "post",
        data: data

    })
}

/**
 * 异常订单查询
 */
export function errorListQueryApi(data) {
    return request({
        url: "/cabinet/errorder/qryErrOrder",
        method: "post",
        data: data

    })
}

export default {
    findQuoteApi,
    mailQuoteApi,
    businessDetailApi,
    ranchiseeShareApi,
    setRanchiseeShareApi,
    findFranchStationShareApi,
    setFranchStationShareApi,
    franchDepositApi,
    queryFranchDepositApi,
    inDepositApi,
    outDepositApi,
    findFranchDepositApi,
    getDiscountTableApi,
    addDiscountDataApi,
    setDiscountDataApi,
    delDiscountDataApi,
    getCodeSystemSetApi,
    getCodeSystemSetAddApi,
    delCodeSystemSetApi,
    useCodeSystemSetApi,
    addUseCodeSystemSetApi,
    delUseCodeSystemSetApi,
    handoverCabinetApi,
    setCourierPersonApi,
    setCourierAddInfoApi,
    lookCodeApi,
    changeTelApi,
    historyLookApi,
    showMemoApi,
    addMemoApi,
    pushExpApi,
    expBeiAnAddApi,
    expBeiAnEditApi,
    setGekouStatusApi,
    errorListQueryApi,
}