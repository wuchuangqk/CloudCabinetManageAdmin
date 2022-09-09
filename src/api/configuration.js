import request from '@/utils/request'

/**
 * 保存时间配置
 * @param {} params 
 */
export function saveTimeConfig(params) {
    return request({
        url: '/cdc/time/saveTimeConfig',
        method: 'post',
        data: params
    })
}

/**
 * 
 * 更新时间配置
 * @export
 * @param {any} params 
 * @returns 
 */
export function updateTimeConfig(params) {
    return request({
        url: '/cdc/time/updateTimeConfig',
        method: 'post',
        data: params
    })
}

/**
 * 查询 时间配置列表
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryTimeConfigList(params) {
    return request({
        url: '/cdc/time/queryTimeConfigList',
        method: 'post',
        data: params
    })
}

/**
 * 删除 时间配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function deleteTimeConfig(params) {
    return request({
        url: '/cdc/time/deleteTimeConfig',
        method: 'post',
        data: params
    })
}

/**
 * 根据城市和产品类型查询时间 配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryTimeConfigByCityAndProduct(params) {
    return request({
        url: '/cdc/time/queryTimeConfigByCityAndProduct',
        method: 'post',
        data: params
    })
}

/**
 * 验证码参数配置
 * 保存 验证码
 * @export
 * @param {any} params 
 * @returns 
 */
export function verifyCodeSave(params) {
    return request({
        url: '/cdc/verifyCode/save',
        method: 'post',
        data: params
    })
}

/**
 * 更新验证码配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function verifyCodeUpdata(params) {
    return request({
        url: '/cdc/verifyCode/update',
        method: 'post',
        data: params
    })
}

/**
 * 查询所有验证码配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryVerifyCodeConfigList(params) {
    return request({
        url: '/cdc/verifyCode/queryVerifyCodeConfigList',
        method: 'post',
        data: params
    })
}

/**
 * 删除验证码配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function verifyCodeDelete(params) {
    return request({
        url: '/cdc/verifyCode/delete',
        method: 'post',
        data: params
    })
}

/**
 * 根据城市和产品类型查询 验证码配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryVerifyCodeConfig(params) {
    return request({
        url: '/cdc/verifyCode/queryVerifyCodeConfig',
        method: 'post',
        data: params
    })
}

/**
 * 保存 车队参数
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function fleetParamSave(params) {
    return request({
        url: '/cdc/fleetParam/save',
        method: 'post',
        data: params
    })
}

/**
 * 更新车队参数
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function fleetParamUpdate(params) {
    return request({
        url: '/cdc/fleetParam/update',
        method: 'post',
        data: params
    })
}

/**
 * 查询车队参数
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryFleetParamConfig(params) {
    return request({
        url: '/cdc/fleetParam/queryFleetParamConfig',
        method: 'post',
        data: params
    })
}

/**
 * 删除 车队参数
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function fleetParamDelete(params) {
    return request({
        url: '/cdc/fleetParam/delete',
        method: 'post',
        data: params
    })
}

/**
 * 保存里程配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function mileageParamSave(params) {
    return request({
        url: '/cdc/mileageParam/save',
        method: 'post',
        data: params
    })
}

/**
 * 更新里程配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function mileageParamUpdate(params) {
    return request({
        url: '/cdc/mileageParam/update',
        method: 'post',
        data: params
    })
}

/**
 * 查询 里程配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryMileageConfig(params) {
    return request({
        url: '/cdc/mileageParam/queryMileageConfig',
        method: 'post',
        data: params
    })
}

/**
 * 删除里程配置
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function mileageParamDelete(params) {
    return request({
        url: '/cdc/mileageParam/delete',
        method: 'post',
        data: params
    })
}

/**
 * 保存免验证手机号
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function telValidateSave(params) {
    return request({
        url: '/cdc/telValidate/save',
        method: 'post',
        data: params
    })
}

/**
 * 删除免验证手机号
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function telValidateDelete(params) {
    return request({
        url: '/cdc/telValidate/delete',
        method: 'post',
        data: params
    })
}

/**
 * 根据 手机号查询免验证信息
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryByTelephone(params) {
    return request({
        url: '/cdc/telValidate/queryByTelephone',
        method: 'post',
        data: params
    })
}

/**
 *   分页 查询免验证信息
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function queryTelValidateList(params) {
    return request({
        url: '/cdc/telValidate/queryTelValidateList',
        method: 'post',
        data: params
    })
}

/**
 * 新增保价
 * 
 * @export
 * @param {any} params 
 * @returns 
 */
export function priceConfigSave(params) {
    return request({
        url: '/cdc/priceConfig/save',
        method: 'post',
        data: params
    })
}