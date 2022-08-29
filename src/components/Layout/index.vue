<template>
  <div :class="classObj" class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <Sidebar class="sidebar-container" />
    <div class="main-container hasTagsView">
      <div class="fixed-header">
        <Navbar />
        <!-- <tags-view v-if="needTagsView" /> -->
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import { computed } from 'vue'
import useAppStore from '../../store/app';
import AppMain from './components/AppMain.vue'

const app = useAppStore()
const classObj = computed(() => {
  return {
    hideSidebar: !app.sidebar.opened,
    openSidebar: app.sidebar.opened,
    withoutAnimation: app.sidebar.withoutAnimation,
  }
})
</script> 

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>
