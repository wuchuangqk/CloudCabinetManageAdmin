import request from '@/utils/request'

export function getBusSubList(data) {
    return request({
        url: '/cwcs/quotesubject/getBusSubList',
        method: 'post',
        data: data
    })
}