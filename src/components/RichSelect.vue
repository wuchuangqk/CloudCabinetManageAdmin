<template>
  <div class="flex rich-select">
    <el-select v-model="target" placeholder="请选择" :multiple="multiple" @change="change">
      <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
    </el-select>
    <div class="trigger" @click="call('trigger')">
      <el-icon>
        <Filter />
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "AreaSelect",
};
</script>
<script setup lang="ts">
import { Filter } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';

const props = withDefaults(defineProps<{
  multiple: boolean; // 多选
  modelValue: Array<any> | any,
  options: IOption[],
}>(), {
  multiple: false,
});
const call = defineEmits(["update:modelValue", 'trigger']);
const target = ref()
const change = () => {
  call('update:modelValue', target.value)
};
watch(() => props.options, (newVal: IOption[]) => {
  if (!newVal.some(val => val.value === target.value)) {
    target.value = ''
    change()
  }
})
</script>

<style lang="scss" scoped>
.rich-select :deep(.el-input) {
  width: auto;
}

.trigger {
  padding: 0 10px;
  background: #f5f7fa;
  flex-shrink: 0;
  background-image: none;
  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
  transition: var(--el-transition-box-shadow);
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
  margin-left: -1px;
  color: var(--el-color-info);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 1px #c0c4cc inset;
  }
}
</style>