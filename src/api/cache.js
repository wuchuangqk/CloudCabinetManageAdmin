import request from '@/utils/request'

/**
 * 持久层缓存查询
 * @param {object} data {telephone：String }
 */
export const queryAllCache = (data,urlPrefix) => {
  return request({
    url: (urlPrefix?urlPrefix:'') + '/platform/cache/queryAllCache',
    method: 'post',
    data: data
  })
}

/**
 * 持久层缓存全部删除
 * @param {object} data {telephone：String }
 */
export const cleanAllDaoCache = (data,urlPrefix) => {
    return request({
      url: (urlPrefix?urlPrefix:'') + '/platform/cache/cleanAllDaoCache',
      method: 'post',
      data: data
    })
  }

/**
 * 持久层缓存 单个删除
 * @param {object} data {id: String}
 */
export const cleanDaoByKey = (data,urlPrefix) => {
  return request({
    url: (urlPrefix?urlPrefix:'') + '/platform/cache/cleanDaoByKey',
    method: 'post',
    data: data
  })
}


/**
 * 清除权限缓存
 * @param {object} data {id: String}
 */
export const cacheInfo = data => {
    return request({
      url: '/cgs/cache/cacheInfo',
      method: 'post',
      data: data
    })
  }

  
/**
 * 查询所有系统信息
 * @param {object} data {id: String}
 */
export const queryAllSystem = data => {
    return request({
      url: '/cgs/system/queryAllSystem',
      method: 'post',
      data: data
    })
  }


  /**
 * 查询redis缓存key列表
 * @param {object} data {id: String}
 */
export const queryAllRedisKeys = (data,urlPrefix) => {
  return request({
    url: (urlPrefix?urlPrefix:'') +'/platform/cache/queryAllRedisKeys',
    method: 'post',
    data: data
  })
}

  /**
 * 删除redis缓存
 * @param {object} data {id: String}
 */
export const deleteRedisCacheByKey = (data,urlPrefix) => {
  return request({
    url: urlPrefix + '/platform/cache/deleteRedisCacheByKey',
    method: 'post',
    data: data
  })
}

  /**
 * 新增redis缓存
 * @param {object} data {id: String}
 */
export const saveRedisCache = (data,urlPrefix) => {
  return request({
    url: urlPrefix + '/platform/cache/saveRedisCache',
    method: 'post',
    data: data
  })
}

  /**
 * 设置redis过期时间
 * @param {object} data {id: String}
 */
export const setupExpiredTime = (data,urlPrefix) => {
  return request({
    url: urlPrefix + '/platform/cache/setupExpiredTime',
    method: 'post',
    data: data
  })
}

  /**
 * 查询redis缓存内容
 * @param {object} data {id: String}
 */
export const queryRedisCacheByKey = (data,urlPrefix) => {
  return request({
    url: urlPrefix + '/platform/cache/queryRedisCacheByKey',
    method: 'post',
    data: data
  })
}

/**
 * 删除模块缓存
 * @param {object} data {sysId: Integer}
 */
export const cleanCached = (data) => {
  return request({
    url: '/cgs/cache/cleanCachedRoleModulesBySysId',
    method: 'post',
    data: data
  })
}

export default {
    queryAllCache,
    cleanAllDaoCache,
    cleanDaoByKey,
    queryAllSystem,
    cacheInfo,
    queryAllRedisKeys,
    deleteRedisCacheByKey,
    saveRedisCache,
    setupExpiredTime,
    queryRedisCacheByKey,
    cleanCached
}
