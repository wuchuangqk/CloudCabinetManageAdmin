<template>
  <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
    <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
      <img v-if="logo" :src="logo" class="sidebar-logo">
      <h1 v-else class="sidebar-title">{{ appName }} </h1>
    </router-link>
    <router-link v-else key="expand" class="sidebar-logo-link" to="/">
      <img v-if="logo" :src="logo" class="sidebar-logo">
      <h1 class="sidebar-title">{{ appName }} </h1>
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
const logo = 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  background: var(--menu-bg);
  padding-left: var(--el-menu-base-level-padding);

  & .sidebar-logo-link {
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }

    & .sidebar-title {
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    padding-left: 0;
    display: flex;
    justify-content: center;

    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
