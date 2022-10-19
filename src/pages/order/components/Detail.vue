<template>
  <el-dialog v-model="show" title="订单详情" width="700px" :close-on-click-modal="false" id="order-send-detail">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="订单详情" name="detail">
        <div>
          <span>订单ID</span>
          <span>{{orderDetail.id}}</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单轨迹" name="log">
        <div class="wrap">
          <el-timeline>
            <el-timeline-item v-for="(activity, index) in orderLog" :key="index" :timestamp="activity.opsDate"
              :type="index === 0 ? 'primary' : ''">
              {{ activity.description }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { look1 as getOrderDetailAPI, look2 as getOrderLogAPI } from "@/api/yungui/cabinet/order.js";

const props = defineProps<{
  orderType: string, // 订单类型
}>()
onMounted(() => {
});
const show = ref(false)
const orderDetail = ref<any>({}) // 订单详情
const orderLog = ref<any>([]) // 订单轨迹
const open = (params) => {
  activeTab.value = 'detail'
  show.value = true
  getOrderDetailAPI({ id: params.id }).then(res => {
    orderDetail.value = res.data ? res.data[0] : {}
  })
  getOrderLogAPI({ orderNo: params.orderNo }).then(res => {
    orderLog.value = res.data || []
  })
}
const activeTab = ref('detail')
defineExpose({
  open
})
</script>

<style lang="scss" scoped>

</style>
<style lang="scss">
#order-send-detail {
  .el-dialog__body {
    padding-top: 10px;
  }
}

.wrap {
  padding-top: 8px;
}
</style>
