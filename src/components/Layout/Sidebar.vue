<template>
  <div class="sidebar">
    <Logo :collapse="appStore.sidebarClosed" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="appStore.sidebarClosed" :unique-opened="true" :collapse-transition="false"
        @select="nav">
        <el-sub-menu v-for="route in filterShow(permission.appRoutes)" :key="route.name" :index="route.path">
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

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const permission = usePermissionStore()
const activeMenu = (): string => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu as string
  }
  return path
}
const nav = (path: string) => {
  router.push(path)
}
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
</script>
<style lang="scss" scoped>
$menuText: #bfcbd9;
$menuActiveText: #409EFF;
$subMenuActiveText: #f4f4f5;

$menuBg: #304156;
$menuHover: #263445;

$subMenuBg: #1f2d3d;
$subMenuHover: #001528;

$sideBarWidth: 210px;

.sidebar {
  transition: width 0.28s;
  width: var(--sidebar-width);
  background-color: var(--menu-bg);
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

  // menu hover
  .submenu-title-noDropdown,
  .el-sub-menu__title {
    &:hover {
      background-color: $menuHover  !important;
    }
  }

  .is-active>.el-sub-menu__title {
    color: $subMenuActiveText  !important;
  }

  & .nest-menu .el-sub-menu>.el-sub-menu__title,
  & .el-sub-menu .el-menu-item {
    min-width: $sideBarWidth  !important;
    background-color: $subMenuBg  !important;

    &:hover {
      background-color: $subMenuHover  !important;
    }
  }
}
</style>