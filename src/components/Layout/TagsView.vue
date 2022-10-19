<template>
  <div ref="tagsRef" class="tags-view-container">
    <el-scrollbar :vertical="false" class="scroll-container">
      <div class="links">
        <router-link v-for="tag in tags" :key="tag.path" :to="tag.path" class="tags-view-item"
          @contextmenu.prevent="openMenu(tag, $event)">
          <span>{{ tag.meta.title }}</span>
          <div v-if="tag.name !== 'index'" class="close">
            <el-icon @click.prevent.stop="closeSelectedTag(tag)">
              <Close size="12" />
            </el-icon>
          </div>
        </router-link>
      </div>
    </el-scrollbar>
    <ul v-show="visible" :style="{ left: left + 'px'}" class="contextmenu">
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Close } from '@element-plus/icons-vue'
interface IView {
  path: string // 路由地址
  title: string // 路由标题
  name: string // 路由名称
  meta: any
  query: any
  params: any
}
const home = {
  path: '/index',
  name: 'index',
  meta: {
    title: '首页',
    isAffix: true,
  }
} as any

const tags = ref<IView[]>([home])
const visible = ref(false)
const left = ref(0)
const selectedTag = ref<IView>({} as IView)
const route = useRoute()
const router = useRouter()

watch(route, () => {
  addTags()
})
onMounted(() => {
  addTags()
  document.documentElement.addEventListener('click', closeMenu)
})
onBeforeUnmount(() => {
  document.documentElement.removeEventListener('click', closeMenu)
})
const addTags = () => {
  if (tags.value.some((tag) => tag.path === route.path)) return
  const { meta } = route
  if (meta && meta.title) {
    // @ts-ignore
    tags.value.push(Object.assign({}, route))
  }
}
const closeSelectedTag = (view: IView) => {
  const index = tags.value.findIndex(val => val.path === view.path)
  if (index !== -1) {
    tags.value.splice(index, 1)
    toLastView()
  }
}
const closeOthersTags = () => {
  tags.value = [home, selectedTag.value]
  router.push(selectedTag.value)
}
const closeAllTags = (view) => {
  tags.value = [home]
  toLastView()
}
const toLastView = () => {
  const latestView = tags.value[tags.value.length - 1]
  if (latestView) {
    router.push(latestView.path)
  } else {
    // 回首页
    router.push('/')
  }
}
const tagsRef = ref()
const openMenu = (tag, e) => {
  if (!tagsRef.value) return
  const menuMinWidth = 105
  const offsetLeft = tagsRef.value.getBoundingClientRect().left // container margin left
  const offsetWidth = tagsRef.value.offsetWidth // container width
  const maxLeft = offsetWidth - menuMinWidth // left boundary
  const _left = e.clientX - offsetLeft + 15 // 15: margin right

  if (_left > maxLeft) {
    left.value = maxLeft
  } else {
    left.value = _left
  }
  visible.value = true
  selectedTag.value = tag
}
const closeMenu = () => {
  visible.value = false
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  position: relative;

  .links {
    display: flex;
    align-items: center;
    height: 32px;
  }

  .tags-view-item {
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 10px;
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-left: 0;
    }

    // &:first-of-type {
    //   margin-left: 15px;
    // }

    // &:last-of-type {
    //   margin-right: 15px;
    // }

    &.router-link-active {
      background-color: var(--el-color-primary);
      color: #fff;
      border-color: var(--el-color-primary);

      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }

      .close {
        display: flex;
      }
    }

    .close {
      margin-left: 2px;
      display: none;
      align-items: center;
      border-radius: 50%;
      padding: 1px;

      &:hover {
        background: #a8a8a8;
      }
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    top: 36px;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;

      &:hover {
        background: #eee;
      }
    }
  }
}

.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;

  :deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }

    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>
