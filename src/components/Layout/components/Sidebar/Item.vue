<template>
  <template v-if="icon">
    <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
    <svg-icon v-else :icon-class="icon" />
  </template>
  <span v-if="title">{{ title }}</span>
</template>
<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>
<script lang="ts" setup>
withDefaults(defineProps<{
  icon?: string,
  title?: string,
}>(), {
  icon: '',
  title: '',
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
