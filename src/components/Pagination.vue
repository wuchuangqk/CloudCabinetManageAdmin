<template>
  <div class="pagination">
    <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total"
      v-model:current-page="current" v-model:page-size="size" :page-sizes="pageSizes" @size-change="change"
      @current-change="change" />
  </div>
</template>
<script lang="ts">
export default {
  name: 'Pagination'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  offset: number,
  limit: number,
  total: number
}>(), {
  total: 0
})
const call = defineEmits(['change'])
const current = ref(1);
const size = ref(15)
const pageSizes = [15, 30, 50, 100]

const change = () => {
  call('change', current.value - 1, size.value)
}
</script>

<style lang="scss" scoped>

</style>