/**
 * localStorage的键名
 */
export const CACHE_KEY = {
  /**
   * 登录凭证
   */
  TOKEN: 'token',
  /**
   * 用户信息
   */
  USER_INFO: 'userInfo',
  /**
   * 权限
   */
  PERMISSION: 'permission',
  SYS_ID: 'sysId',
  REQ_SIGN: 'reqSign',
}

/**
 * 登录方式
 */
export const LOGIN_TYPE = {
  /**
   * 账号密码登录
   */
  PASSWORD: 1,
  /**
   * 手机验证码登录
   */
  CODE: 2,
}

export const SYS_ID = {
  /**
   * 平台
   */
  OFFICIAL: 1024,
  /**
   * 加盟商
   */
  PARTNER: 1040,
}
export const REQ_SIGN = {
  /**
   * 平台
   */
  OFFICIAL: 'ccce26326bbb4e64837aec2b155a2f76',
  /**
   * 加盟商
   */
  PARTNER: '7178941fac6e45d8a6b14be790fd1dba',
}
