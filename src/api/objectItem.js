/*
  ID  SUB_NAME
------  ----------------
 10001  上架费
 10002  下架费
 10003  使用费
 10004  使用超时费
 10005  派件费
 10006  代收货款
 10007  快递费-到付
 */

//上架费 下架费 站点使用费 站点使用超时费 派件费
var objectData = {
  putAway:{
    value:10001,
    label:"上架费"
  },
  soldOut:{
    value:10002,
    label:"下架费"
  },
  wareUse:{
    value:10003,
    label:"使用费"
  },
  wareUseOutTime:{
    value:10004,
    label:"使用超时费"
  },
  deliveryOut:{
    value:10005,
    label:"派件费"
  },
}

var objectType = {
  allEntrust:{
    value:10001,
    label:"全委托"
  },
  inEntust:{
    value:10002,
    label:"进站委托"
  },
  outEntust:{
    value:10003,
    label:"出站委托"
  },
  self:{
    value:10004,
    label:"自理"
  }
}

export function objectTypeValue(objectTypeData) {
  if (objectType.allEntrust.value === objectTypeData) {
    let data = [objectData.putAway,objectData.soldOut,objectData.wareUse]
    return data
  }else if (objectType.inEntust.value === objectTypeData) {
    let data = [objectData.putAway,objectData.wareUse,objectData.wareUseOutTime]
    return data
  }else if (objectType.outEntust.value === objectTypeData) {
    let data = [objectData.soldOut,objectData.wareUse]
    return data
  }else if (objectType.self.value === objectTypeData) {
    let data = [objectData.wareUse,objectData.wareUseOutTime]
    return data
  }
}

//调度中的订单类型
var orderOpType = {
  upOrderOpType: {//进站
    value:"0",
    label:"上架订单"
  },
  downOrderOpType: {//出站
    value:"1",
    label:"下架订单"
  }
}

var inOrderBusType = [
  {
    value:"0",
    label:"换站(进)"
  },
  {
    value:"1",
    label:"传站(进)"
  },
  {
    value:"2",
    label:"取件(进)"
  },
  {
    value:"3",
    label:"退件(进)"
  },
  {
    value:"4",
    label:"再派(进)"
  }
]

var outOrderBusType = [
  {
    value:"0",
    label:"换站(出)"
  },
  {
    value:"1",
    label:"派件(出)"
  },
  {
    value:"2",
    label:"传站(出)"
  }
]

var inUpDown = {
  //上架管理
  inOrderUpType : [
    {
      value:"0",
      label:"换站"
    },
    {
      value:"1",
      label:"传站"
    },
    {
      value:"2",
      label:"取件"
    },
    {
      value:"3",
      label:"退件"
    },
    {
      value:"4",
      label:"再派"
    }
  ],

  //下架管理
  outOrderDownType : [
    {
      value:"0",
      label:"换站"
    },
    {
      value:"1",
      label:"派件"
    },
    {
      value:"2",
      label:"传站"
    }
  ]
}

//站点设备
//设备选项
var madeType = [
  {value:1,label:"主板"},
  {value:2,label:"视频"},
  {value:3,label:"门禁"},
  {value:4,label:"重力"},
  {value:5,label:"红外"},
  {value:6,label:"烟感"},
  {value:7,label:"温湿度"},
  {value:8,label:"其他"}
]

export function madeTypeList(data) {
  let label = ''
  madeType.forEach(item => {
    if (data == item.value) {
      label = item.label
    }
  })
  return label
}




export default {
  objectTypeValue,
  inUpDown,
  madeTypeList,
  madeType,//8种站点设备类型
  objectData,//站点5中费用数组
  objectType,//4种委托模式
}
