import { CACHE_KEY } from '@/utils/constants'
import usePermissionStore from '@/store/permission'
import useUserStore from '@/store/user'

const useUser = () => {
  const permissionStore = usePermissionStore()
  const userStore = useUserStore()

  const logout = () => {
    permissionStore.resetAppRoutes()
    localStorage.removeItem(CACHE_KEY.USER_INFO)
    localStorage.removeItem(CACHE_KEY.TOKEN)
    userStore.setUserInfo({})
  }

  return {
    logout
  }
}

export default useUser