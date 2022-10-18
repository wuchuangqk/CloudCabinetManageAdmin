<template>
  <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
    <router-link class="sidebar-logo-link" to="/">
      <img :src="logo" class="sidebar-logo">
      <h1 v-show="!collapse" class="sidebar-title">{{ appName }} </h1>
    </router-link>
  </div>
</template>
<script lang="ts">
export default {
  name: 'SidebarLogo',
}
</script>
<script lang="ts" setup>
import { appName } from '@/setting'
defineProps<{
  collapse: boolean
}>()
const logo = '/vite.svg'
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  background: var(--el-menu-bg-color);
  padding-left: 10px;
  overflow: hidden;

  & .sidebar-logo-link {
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    width: 200px;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }

    & .sidebar-title {
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 18px;
      margin: 0;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
