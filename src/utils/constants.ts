/** localStorage的键名 */
export const CACHE_KEY = {
  /** 登录凭证 */
  TOKEN: 'token',
  /** 用户信息 */
  USER_INFO: 'userInfo',
  /** 权限 */
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

/** 错误码 */
export const ERROR_CODE = {
  /** 认证信息失败 */
  EXPIRE: '1303'
}

/** 订单类型(对应openType字段) */
export const ORDER_TYPE = {
  /** 投柜订单13 */
  DISPATCH: 13,
  /** 暂存件40 */
  TEMPORARY: 40,
  /** 紫外灯消杀41 */
  CLEAN: 41,
  /** 电商退货交接42 */
  HANDOVER: 42,
  /** 租赁格口43 */
  HIRE_GRID: 43,
  /** 租手推车44 */
  HIRE_CART: 44,
  /** 蛙站寄件45 */
  SEND: 45,
  /** 便捷寄件46 */
  EASILY: 46,
  /** 交接柜50 */
  HANDOVER_GRID: 50,
  /** 共配60 */
  COMMON: 60,
  /** 直派61 */
  DIRECT: 61,
  /** 外卖暂存70 */
  TAKEOUT_STASH: 70,
  /** 外卖消杀71 */
  TAKEOUT_CLEAN: 71,
}