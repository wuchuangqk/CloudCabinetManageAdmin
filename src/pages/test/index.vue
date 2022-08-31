<template>
  <div>
    sdfsdfsdfs
    <div>
      <Tab v-model="current" :items="items" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Tab } from '@mzx_qk/ui'
const current = ref(1)
const items = [
  {label: '张三', value: 1},
  {label: '李四', value: 2},
  {label: '王五', value: 3},
]
</script>

<style lang="scss" scoped>
</style>