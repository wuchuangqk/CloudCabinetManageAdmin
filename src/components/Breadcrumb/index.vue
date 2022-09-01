<template>
  <el-breadcrumb class="app-breadcrumb" :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path" :to="item.path">{{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'

const levelList = ref()
const route = useRoute()
watch(route, () => {
  if (route.path.startsWith('/redirect/')) {
    return
  }
  getBreadcrumb()
})
const getBreadcrumb = () => {
  let matched: any = route.matched.filter(item => item.meta && item.meta.title)
  const first = matched[0]

  if (!isDashboard(first)) {
    matched = [{ path: '/', meta: { title: '首页' } }].concat(matched)
  }

  levelList.value = matched.filter((item: any) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}
const isDashboard = (route: any) => {
  const name = route && route.name
  if (!name) {
    return false
  }
  return name === 'index'
}
onMounted(() => {
  getBreadcrumb()
})
</script>
<style lang="scss" scoped>
</style>