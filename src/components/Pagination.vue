<template>
  <div class="pagination">
    <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="params.total"
      v-model:current-page="pageCurrent" v-model:page-size="pageSize" :page-sizes="pageSizes" hide-on-single-page
      @size-change="sizeChange" @current-change="change" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'Pagination'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
interface IParams {
  offset: number
  limit: number
  total: number // 总条数
}
const props = defineProps<{ params: IParams }>()
const call = defineEmits(['change'])
const pageCurrent = ref(1);
const pageSize = ref(2)
const pageSizes = [15, 30, 50, 100]
const change = () => {
  props.params.limit = pageSize.value
  props.params.offset = (pageCurrent.value - 1) * pageSize.value
  call('change')
}
const sizeChange = () => {
  // 变更每页条数后，页码重置回第一页
  pageCurrent.value = 1
  change()
}
</script>

<style lang="scss" scoped>

</style>