import { defineStore } from 'pinia'
import {ref} from 'vue'
import Cookies from 'js-cookie'

export const useAppStore = defineStore('app', () => {
  const sidebar = ref({
    // @ts-ignore
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  })
  const toggleSideBar = () => {
    sidebar.value.opened = !sidebar.value.opened
    sidebar.value.withoutAnimation = false
    if (sidebar.value.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  }
  const closeSideBar = (withoutAnimation: boolean) => {
    Cookies.set('sidebarStatus', '0')
    sidebar.value.opened = false
    sidebar.value.withoutAnimation = withoutAnimation
  }

  const device = ref('desktop')
  const toggleDevice = (newDevice: string) => {
    device.value = newDevice
  }

  return {
    sidebar,
    toggleSideBar,
    closeSideBar,
    device,
    toggleDevice
  }
})