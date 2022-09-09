import request from '@/utils/request'


/**
 * 查询所有系统信息
 * @param {object} data {telephone：String }
 */
export const queryAllSystem = data => {
  return request({
    url: '/cgs/system/queryAllSystem',
    method: 'post',
    data: data
  })
}


/**
 * 新增消息模板
 * @param {object} data {telephone：String }
 */
export const saveTemplate = data => {
  return request({
    url: '/cms/template/saveTemplate',
    method: 'post',
    data: data
  })
}

/**
 * 修改消息模板
 * @param {object} data {telephone：String }
 */
export const updateTemplate = data => {
    return request({
      url: '/cms/template/updateTemplate',
      method: 'post',
      data: data
    })
  }

/**
 * 删除消息模板
 * @param {object} data {id: String}
 */
export const deleteTemplate = data => {
  return request({
    url: '/cms/template/deleteTemplate',
    method: 'post',
    data: data
  })
}

/**
 * 分页查询消息模板
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryTemplateList = data => {
  return request({
    url: '/cms/template/queryTemplateList',
    method: 'post',
    data: data
  })
}

/**
 * 查询所有模板
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryAllTemplate = data => {
  return request({
    url: '/cms/template/queryAllTemplate',
    method: 'post',
    data: data
  })
}

/**
 * 分页查询发送记录
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const querySendList = data => {
  return request({
    url: '/cms/message/querySendList',
    method: 'post',
    data: data
  })
}

/**
 * 消息发送接口
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const messageSend = data => {
  return request({
    url: '/cms/message/send',
    method: 'post',
    data: data
  })
}

export default {
    saveTemplate,
    updateTemplate,
    deleteTemplate,
    queryTemplateList,
    querySendList,
    messageSend,
    queryAllTemplate,
    queryAllSystem
}
