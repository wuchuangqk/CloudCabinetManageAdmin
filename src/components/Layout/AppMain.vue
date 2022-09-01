<template>
  <section>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>
<script lang="ts">
export default {
  name: 'AppMain',
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useTagsStore from '@/store/tagsView'

const tags = useTagsStore()
const cachedViews = computed(() => {
  return tags.visitedViews
})
const route = useRoute()
const key = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.app-main {
  padding-left: var(--sidebar-width);
  padding-top: 84px;
  transition: padding-left .28s;
  position: relative;
}
</style>