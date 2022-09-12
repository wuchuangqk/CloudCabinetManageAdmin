<template>
  <div class="navbar">
    <div class="head-wrap">
      <Hamburger class="hover-effect" />
      <Breadcrumb />
      <div class="right">
        <el-dropdown @command="handleCommand">
          <div class="right-item hover-effect">
            <span>{{userStore.userInfo.realName}}</span>
            <el-icon class="user-icon">
              <CaretBottom />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Lock" command="modify">修改密码</el-dropdown-item>
              <el-dropdown-item divided :icon="SwitchButton" command="logout">退出登录</el-dropdown-item>
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
import { CACHE_KEY } from '@/utils/constants'
import useUserStore from '@/store/user'
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const permissionStore = usePermissionStore()
const userStore = useUserStore()
const doLogout = () => {
  return new Promise(resolve => {
    resolve({})
  })
}
const logout = () => {
  ElMessageBox.confirm(
    '确定退出登录吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      doLogout().then(() => {
        permissionStore.resetAppRoutes()
        localStorage.removeItem(CACHE_KEY.USER_INFO)
        localStorage.removeItem(CACHE_KEY.TOKEN)
        userStore.setUserInfo({})
        router.push('/login')
      })
    })
    .catch(() => {
    })
}

const handleCommand = (command: string) => {
  switch (command) {
    case 'modify':
      break
    case 'logout':
      logout()
      break
  }
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
