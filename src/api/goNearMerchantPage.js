import request from '@/utils/request'
/**
 * 查询附近商户信息
 * @param {object} data {telephone：String }
 */
export const queryNearbyBusiness = data => {
    return request({
        url: '/cas/position/queryNearbyBusiness',
        method: 'post',
        data: data
    })
}



export default {
    queryNearbyBusiness
}