import { defineStore } from 'pinia'
import { ref } from 'vue'

const useAppStore = defineStore('app', () => {
  // 是否折叠侧边栏
  const sidebarClosed = ref(false)
  const toggleSideBar = () => {
    sidebarClosed.value = !sidebarClosed.value
  }

  return {
    sidebarClosed,
    toggleSideBar,
  }
})

export default useAppStore