<template>
  <div class="navbar">
    <div class="head-wrap">
      <Hamburger class="hover-effect" />
      <Breadcrumb />
      <div class="right">
        <el-dropdown>
          <div class="right-item hover-effect">
            <span>管理员</span>
            <el-icon class="user-icon">
              <CaretBottom />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Lock">修改密码</el-dropdown-item>
              <el-dropdown-item divided :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <TagsView />
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useRouter, useRoute } from 'vue-router'
import usePermissionStore from '@/store/permission'
import { SwitchButton, Lock, CaretBottom } from '@element-plus/icons-vue'
import TagsView from './TagsView.vue'

const router = useRouter()
const route = useRoute()
const permissionStore = usePermissionStore()
const doLogout = () => {
  return new Promise(resolve => {
    resolve({})
  })
}
const logout = async () => {
  doLogout().then(() => {
    permissionStore.resetAppRoutes()
    router.push('/login')
  })
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  left: var(--sidebar-width);
  transition: left 0.28s;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  height: 80px;

  .head-wrap {
    display: flex;
    align-items: center;
    height: 50px;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    // padding-right: 20px;

    .right-item {
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      color: #5a5e66;
    }

    .user-icon {
      margin-left: 5px;
      vertical-align: text-top;
    }
  }

  .hover-effect {
    cursor: pointer;
    transition: background .2s;

    &:hover {
      background: #f6f6f6;
    }
  }

}
</style>
