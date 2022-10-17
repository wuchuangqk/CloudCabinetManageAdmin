<template>
  <div class="sidebar">
    <Logo :collapse="appStore.sidebarClosed" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="appStore.sidebarClosed" :unique-opened="true"
        :collapse-transition="false" router menu-trigger="click">
        <template v-for="route in filterShow(permission.appRoutes)">
          <el-menu-item v-if="notExpend(route)" :index="route.path">
            <el-icon>
              <Edit />
            </el-icon>
            <template #title><span>{{ route.meta?.title }}</span></template>
          </el-menu-item>
          <el-sub-menu v-else :index="route.path">
            <template #title>
              <el-icon>
                <Edit />
              </el-icon>
              <span>{{ route.meta?.title }}</span>
            </template>
            <el-menu-item v-for="child in filterShow(route.children || [])" :key="child.name"
              :index="setChildPath(route.path, child.path)">
              <span>{{ child.meta?.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
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
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import useAppStore from '@/store/app';
import usePermissionStore from '@/store/permission';
import { Edit } from '@element-plus/icons-vue'
import { computed } from 'vue';

const route = useRoute()
const appStore = useAppStore()
const permission = usePermissionStore()

// meta.hidden 表示路由无需在菜单上显示
const filterShow = (routes: RouteRecordRaw[]) => {
  return routes.filter((route) => {
    if (!route.meta || route.meta.hidden) return false
    return true
  })
}

const setChildPath = (parentPath: string, childPath: string) => {
  parentPath = parentPath.startsWith('/') ? parentPath : '/' + parentPath
  childPath = childPath.startsWith('/') ? childPath : '/' + childPath
  return parentPath + childPath
}
const notExpend = (route: RouteRecordRaw) => {
  if (!route.children || (route.meta && route.meta.notExpend)) {
    return true
  }
  return false
}
const activeMenu = computed(() => {
  return route.path
})
</script>
<style lang="scss" scoped>
.el-menu-item:hover {
  color: var(--el-menu-active-color);
}

.sidebar {
  transition: width 0.28s;
  width: var(--sidebar-width);
  background-color: var(--el-menu-bg-color);
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .el-menu-item.is-active {
    background-color: var(--el-menu-hover-bg-color);
  }

  :deep(.el-sub-menu__title:hover) {
    color: var(--el-menu-active-color);
  }

  :deep(.el-sub-menu.is-active .el-sub-menu__title) {
    color: var(--el-menu-active-color);
  }

  .el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger:hover {
    color: var(--el-menu-active-color);
  }

  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }

  .el-scrollbar {
    flex: 1;
  }

  .is-horizontal {
    display: none;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .svg-icon {
    margin-right: 16px;
  }

  .sub-el-icon {
    margin-right: 12px;
    margin-left: -2px;
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
}
</style>