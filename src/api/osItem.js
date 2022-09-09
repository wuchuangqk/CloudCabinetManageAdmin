import request from '@/utils/request'
import request2 from '@/utils/request'
import qs from 'qs'

/**
 * APP更新版本
 */
export function getAPPCode(data) {
    return request({
        url: '/cdc/version/queryAppVersionList',
        method: 'post',
        data: data
    })
}

/**
 * 上传APK
 */
export function getAPPUploadFile(data) {
    return request({
        url: '/cdc/upload/uploadFile',
        method: 'post',
        // headers: {
        //   "Content-Type":'application/x-www-form-urlencoded'
        // },
        // withCredentials: true,
        data: data
    })
}

/**
 * 下载文件
 */
 export function downloadFile(data) {
    return request({
        url: '/cdc/upload/downloadFile',
        method: 'post',
        // headers: {
        //   "Content-Type":'application/x-www-form-urlencoded'
        // },
        // withCredentials: true,
        data: data,
        responseType: 'blob'
    })
}

/**
 * 发布APK
 */
export function getAPPUpdateVersion(data) {
    return request({
        url: '/cdc/version/updateVersion',
        method: 'post',
        data: data
    })
}

/**
 * 批量导单
 */
export function getImportOrder(data) {
    return request({
        url: '/cwoapi/testimpOrder/importOrder',
        method: 'post',
        data: data
    })
}

/**
 * 新批量导单
 */
export function getImportOrderNew(data) {
    return request({
        url: '/cwoapi/importorder/importOrder',
        method: 'post',
        data: data
    })
}

/**
 * 查询批次接口
 */
export function getFindBatch(data) {
    return request({
        url: '/cwoapi/findorderstatus/findBatch',
        method: 'post',
        data: data
    })
}

/**
 * 新查询批次接口
 */
export function getDataList(data) {
    return request({
        url: '/cwoapi/exporterrororder/dataList',
        method: 'post',
        data: data
    })
}

/**
 * 根据批次查询导入数据/cdc/upload/findFile
 */
export function getFindOrderDataBatch(data) {
    return request({
        url: '/cwoapi/findorderstatus/findOrderDataBatch',
        method: 'post',
        data: data
    })
}

/**
 * 查询上传文件信息
 */
export function findFile(data) {
    return request({
        url: '/cdc/upload/findFile',
        method: 'post',
        data: data
    })
}

/**
 * 下载上传文件文件信息
 */
export function findExport(data) {
    return request({
        url: '/cwoapi/exporterrororder/export',
        method: 'post',
        data: data
    })
}