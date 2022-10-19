const useOptions = () => {
  // 订单状态
  const statusOptions = [
    { label: '支付未开门', value: 58 },
    { label: '进行中', value: 0 },
    { label: '待取件', value: 1 },
    { label: '已完成', value: 2 },
    { label: '拒收', value: 4 },
    { label: '已取消', value: -1 },
    { label: '作废', value: -2 },
  ]
  // 格口类型
  const cabinetTypeOptions = [
    { label: '小', value: 0 },
    { label: '中', value: 1 },
    { label: '大', value: 2 },
  ]
  // 是否并柜
  const isMergeOptions = [
    { label: '是', value: 1 },
    { label: '否', value: 0 },
  ]

  return {
    statusOptions,
    cabinetTypeOptions,
    isMergeOptions
  }
}
export default useOptions