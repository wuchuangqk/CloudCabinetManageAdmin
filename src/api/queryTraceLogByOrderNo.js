import request from '@/utils/request'

/**
 * 根据单号查询追踪日志
 * @param {object} data {telephone：String }
 */
export const queryTraceLogByOrderNo = data => {
  return request({
    url: '/ces/trace/queryTraceLogByOrderNo',
    method: 'post',
    data: data
  })
}


export default {
    queryTraceLogByOrderNo
}