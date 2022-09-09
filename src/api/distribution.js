import request from '@/utils/request'

/**
 * 共配订单查询
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
 export const qryInOrder = data => {
    return request({
      url: '/cabinet/inorder/qryInOrder',
      method: 'post',
      data: data
    })
  }


  export default {
    qryInOrder,
  }
  