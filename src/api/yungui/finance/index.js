import request from '@/utils/request' // 引入axios请求方法

export function table(data) {
    return request({
        url: 'cwcs/smgr/queryMgrStatementList',
        method: 'post',
        data: data
    })
}

export function s(data) {
    return request({
        url: '/cabinet/cabinet/querylist',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-余额查询
export function queryAccountPoolApi(data) {
    return request({
        url: '/cps/accountpool/queryAccountPool',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-充值记录
export function findDepotPayApi(data) {
    return request({
        url: '/cps/fdepos/findDepotPay',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-帐户余额明细
export function findTradeBillFlowApi(data) {
    return request({
        url: '/cps/tradebillflow/findTradeBillFlow',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-余额充值
export function depotPayApi(data) {
    return request({
        url: '/cps/depos/depotPay',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-查询微信绑定帐号
export function findFranchBindApi(data) {
    return request({
        url: '/cps/franchWithdrawal/findFranchBind',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-监听帐号微信是否绑定成功
export function monitorAccountBindApi(data) {
    return request({
        url: '/cps/franchWithdrawal/monitorAccountBind',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-提现微信解绑
export function unBindFranchBindApi(data) {
    return request({
        url: '/cps/franchWithdrawal/unBindFranchBind',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-提现验证码
export function sendSMSApi(data) {
    return request({
        url: '/cms/message/send',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-提现
export function aplPerCashApi(data) {
    return request({
        url: '/cps/aplcash/aplPerCash',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟商账户管理-提现记录列表
export function cashFindListApi(data) {
    return request({
        url: '/cps/aplcash/cashFindList',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟资产管理 - 加盟商保证金总金额
export function findFranchDepositApi(data) {
    return request({
        url: '/cps/deposits/findFranchDeposit',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟资产管理 - 加盟商保证金流水
export function queryFranchDepositApi(data) {
    return request({
        url: '/cps/deposits/queryFranchDeposit',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟资产管理 - 设备投入明细
export function querylistSumApi(data) {
    return request({
        url: '/cabinet/goods/querylistSum',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 加盟资产管理 - 设备投入明细 -- 详情
export function queryInvestmentAmountDetailsListSumApi(data) {
    return request({
        url: '/cabinet/goods/querylist',
        method: 'post',
        data: data
    })
}

// 后台- 加盟商管理 - 加盟商设备投入明细管理 -- 新增
export function addGoodsApi(data) {
    return request({
        url: 'cabinet/goods/addGoods',
        method: 'post',
        data: data
    })
}

// 后台- 加盟商管理 - 加盟商设备投入明细管理 -- 编辑
export function updGoodsApi(data) {
    return request({
        url: 'cabinet/goods/updGoods',
        method: 'post',
        data: data
    })
}

// 后台- 加盟商管理 - 加盟商设备投入明细管理 -- 删除
export function delGoodsApi(data) {
    return request({
        url: '/cabinet/goods/delGoods',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 付费通知管理 - 支付
export function businessPayApi(data) {
    return request({
        url: '/cwcs/businessStatement/businessPay',
        method: 'post',
        data: data
    })
}

// 结算及支付管理- 结算管理 - 业务对账单
export function findBusinessBillApi(data) {
    return request({
        url: '/cwcs/businessStatement/findBusinessBill',
        method: 'post',
        data: data
    })
}

// 加盟商管理---基础数据管理---加盟商系统设置管理-促销设置
export function findPromotionListApi(data) {
    return request({
        url: '/cwcs/promotion/findPromotionList',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--用户使用订单统计-列表
export function userBusinessOfsumApi(data) {
    return request({
        url: '/cabinet/statistics/UserBusinessOfsum',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--寄件订单明细-列表
export function querySendOrderDetailslistApi(data) {
    return request({
        url: '/cabinet/inexpress/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--存件订单明细-列表
export function queryUsersUseOrderStatisticslistApi(data) {
    return request({
        url: '/cabinet/inprivatecabinetdtl/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--交接柜订单明细-列表
export function handoverCabinetInfoApi(data) {
    return request({
        url: '/cabinet/espcab/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--收件订单明细-列表
export function queryReceivesAnOrderDetailslistApi(data) {
    return request({
        url: '/cabinet/incabinet/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--收件订单明细(新增交接柜)-列表
export function queryReceivesAnOrderDetailsAddApi(data) {
    return request({
        url: '/cabinet/espcab/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---用户使用管理--收件订单明细(修改后)-列表
export function queryReceivesAnOrderDetailsAddNewApi(data) {
    return request({
        url: '/cabinet/incabinet/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---社区/站点柜子使用管理--柜子使用订单统计-列表
export function CabinetBusinessOfsumApi(data) {
    return request({
        url: '/cabinet/statistics/CabinetBusinessOfsum',
        method: 'post',
        data: data
    })
}

// 获取加盟商站点
export function getFranchiseesSiteApi(data) {
    return request({
        url: '/cabinet/cabinet/querylist',
        method: 'post',
        data: data
    })
}

// 业务运营管理---社区/站点柜子使用管理--柜子使用订单统计-列表
export function CabinetBusinessOfMergesumApi(data) {
    return request({
        url: '/cabinet/statistics/CabinetBusinessOfMergesum',
        method: 'post',
        data: data
    })
}

// 业务运营管理---社区/站点柜子使用管理--柜子使用率统计-列表
export function querySumCabinetUseApi(data) {
    return request({
        url: '/cabinet/statistics/querySumCabinetUse',
        method: 'post',
        data: data
    })
}

// 基础管理---社区/站点管理--管理员
export function queryAdministratorApi(data) {
    return request({
        url: '/cabinet/management/querylist',
        method: 'post',
        data: data
    })
}
// 基础管理---社区/站点管理--管理员
export function querySiteApi(data) {
    return request({
        url: '/cabinet/cabinet/querylist',
        method: 'post',
        data: data
    })
}
// 设备运营状态监控--柜子使用订单统计--获取站点
export function NearCabinetOrCabinetApi(data) {
    return request({
        url: '/cabinet/cabinet/NearCabinetOrCabinet',
        method: 'post',
        data: data
    })
}