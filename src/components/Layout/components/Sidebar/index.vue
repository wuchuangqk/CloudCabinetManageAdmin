<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
        :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText"
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import _variables from '@/styles/variables.scss'
import { useRoute } from 'vue-router'
import { useAppStore } from '../../../../store/app';
import { usePermissionStore } from '../../../../store/permission';

const route = useRoute()
const app = useAppStore()
const permission = usePermissionStore()

const activeMenu = () => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
}
const variables = () => {
  return _variables
}
const isCollapse = () => {
  return !app.sidebar.opened
}
const permission_routes = permission.routes
</script>
