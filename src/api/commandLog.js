import request from '@/utils/request'

export function qryCommandLog(data) {
    return request({
        url: '/cwms/commandlog/qryCommandLog',
        method: 'post',
        data: data
    })
}