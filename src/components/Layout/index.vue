<template>
  <div :class="{ 'hide-sidebar': appStore.sidebarClosed }">
    <!-- 左侧导航栏 -->
    <Sidebar class="sidebar" />
    <!-- 头部导航 -->
    <Navbar class="navbar" />
    <!-- 主体内容区 -->
    <AppMain class="app-main" />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import AppMain from './AppMain.vue'
import useAppStore from '@/store/app';

const appStore = useAppStore()
</script> 

<style lang="scss" scoped>
.hide-sidebar {
  .sidebar {
    width: var(--sidebar-collapse-width);
  }

  .app-main {
    padding-left: var(--sidebar-collapse-width);
  }

  .navbar {
    left: var(--sidebar-collapse-width);
  }
}
</style>
