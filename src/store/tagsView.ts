import { defineStore } from 'pinia'
import { ref } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'

export interface IView {
  path: string // 路由地址
  title: string // 路由标题
  name: string // 路由名称
  meta: any
}

const useTagsStore = defineStore('tags', () => {
  const tags = ref<IView[]>([])
  const visitedViews = ref<IView[]>([])
  const cachedViews = ref<string[]>([])
  const addView = (view: RouteLocationNormalizedLoaded) => {
    addVisitedView(view)
    addCachedView(view)
  }
  const addVisitedView = (view: RouteLocationNormalizedLoaded) => {
    if (visitedViews.value.some(v => v.path === view.path)) return
    visitedViews.value.push({
      path: view.path,
      title: (view?.meta?.title || '未命名') as string,
      name: view.name as string,
      meta: view?.meta
    })
  }
  const addCachedView = (view: any) => {
    // if (cachedViews.value.includes(view.name)) return
    // if (!view.meta.noCache) {
    //   cachedViews.value.push(view.name)
    // }
  }
  const delView = (view: RouteLocationNormalizedLoaded) => {
    return new Promise(resolve => {
      delVisitedView(view)
      delCachedView(view)
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      })
    })
  }
  const delVisitedView = (view: RouteLocationNormalizedLoaded) => {
    return new Promise(resolve => {
      for (const [i, v] of visitedViews.value.entries()) {
        if (v.path === view.path) {
          visitedViews.value.splice(i, 1)
          break
        }
      }
      resolve([...visitedViews.value])
    })
  }
  const delCachedView = (view: any) => {
    return new Promise(resolve => {
      const index = cachedViews.value.indexOf(view.name)
      index > -1 && cachedViews.value.splice(index, 1)
      resolve([...cachedViews.value])
    })
  }
  const delOthersViews = (view: RouteLocationNormalizedLoaded) => {
    return new Promise(resolve => {
      delOthersVisitedViews(view)
      delOthersCachedViews(view)
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      })
    })
  }
  const delOthersVisitedViews = (view: RouteLocationNormalizedLoaded) => {
    return new Promise(resolve => {
      visitedViews.value = visitedViews.value.filter(v => {
        return v.meta.affix || v.path === view.path
      })
      resolve([...visitedViews.value])
    })
  }
  const delOthersCachedViews = (view: any) => {
    return new Promise(resolve => {
      const index = cachedViews.value.indexOf(view.name)
      if (index > -1) {
        cachedViews.value = cachedViews.value.slice(index, index + 1)
      } else {
        // if index = -1, there is no cached tags
        cachedViews.value = []
      }
      resolve([...cachedViews.value])
    })
  }
  const delAllViews = () => {
    return new Promise(resolve => {
      delAllVisitedViews()
      delAllCachedViews()
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      })
    })
  }
  const delAllVisitedViews = () => {
    return new Promise(resolve => {
      const affixTags = visitedViews.value.filter(tag => tag.meta.affix)
      visitedViews.value = affixTags
      resolve([...visitedViews.value])
    })
  }
  const delAllCachedViews = () => {
    return new Promise(resolve => {
      cachedViews.value = []
      resolve([...cachedViews.value])
    })
  }
  const updateVisitedView = (view: RouteLocationNormalizedLoaded) => {
    for (let v of visitedViews.value) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  }
  return {
    visitedViews,
    cachedViews,
    addView,
    addVisitedView,
    delView,
    delOthersViews,
    delAllViews,
    delCachedView,
    updateVisitedView,
  }
})

export default useTagsStore