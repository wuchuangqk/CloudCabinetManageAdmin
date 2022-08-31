<template>
  <div class="navbar">
    <div class="head-wrap">
      <Hamburger />
      <Breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
      <div class="right">
        <el-button>退出</el-button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useRouter, useRoute } from 'vue-router'
import usePermissionStore from '@/store/permission'

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
  }

  .right {
    flex: 1;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
