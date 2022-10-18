<template>
  <div id="tags-view-container" class="tags-view-container">
    <!-- <el-scrollbar ref="scrollWrapperRef" :vertical="false" class="scroll-container tags-view-wrapper"
      @wheel.native.prevent="handleScroll">
      <router-link v-for="tag in tags" ref="tagRefs" :key="tag.path"
        :class="isActive(tag) ? 'active' : ''" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span" class="tags-view-item" @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
        @contextmenu.prevent.native="openMenu(tag, $event)">
        {{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </el-scrollbar> -->
    <!-- <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">Refresh</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">Close</li>
      <li @click="closeOthersTags">Close Others</li>
      <li @click="closeAllTags(selectedTag)">Close All</li>
    </ul> -->
    <el-scrollbar :vertical="false" class="scroll-container">
      <div class="links">
        <router-link v-for="tag in tags" :key="tag.path" :to="tag.path" class="tags-view-item">{{ tag.meta.title }}
        </router-link>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from 'vue';
import useTagsStore from '@/store/tagsView'
import usePermissionStore from '@/store/permission'
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router';
const tagAndTagSpacing = 4 // tagAndTagSpacing
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
const tags = ref<RouteLocationNormalizedLoaded[]>([home])

const visible = ref(false)
const top = ref(0)
const left = ref(0)
const selectedTag = ref({})
const affixTags = ref([])
const tagRefs = ref([])
const scrollPaneRef = ref()
const scrollWrapperRef = ref()

const tagsStore = useTagsStore()
const permissionStore = usePermissionStore()
const routes = permissionStore.appRoutes

const route = useRoute()
const router = useRouter()
watch(route, () => {
  addTags()
  // moveToCurrentTag()
})
watch(visible, (value) => {
  if (value) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})
const isActive = (tag: IView) => {
  return tag.path === route.path
}
const isAffix = (tag: IView) => {
  return tag.meta && tag.meta.affix
}
const filterAffixTags = (routes: any, basePath = '/') => {
  let tags: any = []
  routes.forEach((route: any) => {
    if (route.meta && route.meta.affix) {
      const tagPath = path.resolve(basePath, route.path)
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  })
  return tags
}
const initTags = () => {
  affixTags.value = filterAffixTags(routes)
  for (const tag of affixTags.value) {
    // Must have tag name
    if (tag.name) {
      tagsStore.addVisitedView(tag)
    }
  }
}
const addTags = () => {
  if (tags.value.some((tag) => tag.path === route.path)) return
  const { meta } = route
  if (meta && !meta.hidden && meta.title) {
    tags.value.push(Object.assign({}, route))
  }
}
const moveToCurrentTag = () => {
  nextTick(() => {
    for (const tag of tagRefs.value) {
      if (tag.to.path === route.path) {
        moveToTarget(tag)
        // when query is different then update
        if (tag.to.fullPath !== route.fullPath) {
          tagsStore.updateVisitedView(route)
        }
        break
      }
    }
  })
}
const refreshSelectedTag = (view) => {
  tagsStore.delCachedView(view).then(() => {
    const { fullPath } = view
    nextTick(() => {
      router.replace({
        path: '/redirect' + fullPath
      })
    })
  })
}
const closeSelectedTag = (view) => {
  tagsStore.delView(view).then(({ visitedViews }) => {
    if (isActive(view)) {
      toLastView(visitedViews, view)
    }
  })
}
const closeOthersTags = () => {
  router.push(selectedTag)
  tagsStore.delOthersViews(selectedTag).then(() => {
    moveToCurrentTag()
  })
}
const closeAllTags = (view) => {
  tagsStore.delAllViews().then(({ visitedViews }) => {
    if (affixTags.some(tag => tag.path === view.path)) {
      return
    }
    toLastView(visitedViews, view)
  })
}
const toLastView = (visitedViews, view) => {
  const latestView = visitedViews.slice(-1)[0]
  if (latestView) {
    router.push(latestView.fullPath)
  } else {
    // now the default is to redirect to the home page if there is no tags-view,
    // you can adjust it according to your needs.
    if (view.name === 'Dashboard') {
      // to reload home page
      router.replace({ path: '/redirect' + view.fullPath })
    } else {
      router.push('/')
    }
  }
}
const openMenu = (tag, e) => {
  return
  // const menuMinWidth = 105
  // const offsetLeft = $el.getBoundingClientRect().left // container margin left
  // const offsetWidth = $el.offsetWidth // container width
  // const maxLeft = offsetWidth - menuMinWidth // left boundary
  // const left = e.clientX - offsetLeft + 15 // 15: margin right

  // if (left > maxLeft) {
  //   left = maxLeft
  // } else {
  //   left = left
  // }

  // top = e.clientY
  // visible = true
  // selectedTag = tag
}
const closeMenu = () => {
  visible.value = false
}
const handleScroll = () => {
  closeMenu()
}
const handleScroll1 = (e: any) => {
  const eventDelta = e.wheelDelta || -e.deltaY * 40
  // const $scrollWrapperRef = this.scrollWrapperRef
  // $scrollWrapperRef.scrollLeft = $scrollWrapperRef.scrollLeft + eventDelta / 4
}

onMounted(() => {
  // initTags()
  addTags()
  console.log(scrollWrapperRef.value)
  // scrollWrapperRef.value.wrap$.addEventListener('scroll', closeMenu, true)
})
onBeforeUnmount(() => {
  // scrollWrapperRef.value.wrap$.removeEventListener('scroll', closeMenu)
})
// const tagsViewStore = useTagsv
/* export default {
  computed: {
    routes() {
      return $store.state.permission.routes
    }
  },
  methods: {
    
  }
} */
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  background: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0 10px;

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
    }
  }

  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
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
