<template>
  <div class="has-logo">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :unique-opened="true" :collapse-transition="false"
        mode="vertical">
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Sidebar'
}
</script>
<script lang="ts" setup>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'
import { useRoute } from 'vue-router'
import { useAppStore } from '../../../../store/app';
import { usePermissionStore } from '../../../../store/permission';

const route = useRoute()
const app = useAppStore()
const permission = usePermissionStore()
const permission_routes = permission.routes
const activeMenu = (): string => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
}
const isCollapse = () => {
  return !app.sidebar.opened
}
console.log(variables)
</script>
