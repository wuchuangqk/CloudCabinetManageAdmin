<template>
  <div class="flex">
    <el-select v-model="arr" clearable placeholder="请选择" multiple>
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
import { ref } from "vue";
import areaData from "@/utils/areaData";
import { loadImg } from "@/utils";
import { Filter } from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{
    multiple: boolean; // 多选
    clearable: boolean; // 显示清除按钮
    modelValue: Array<any>
  }>(), {
  multiple: false,
  clearable: true,
  modelValue: () => [],
});
const call = defineEmits(["update:modelValue", 'trigger']);
const change = () => {

};
const arr = []
const options: IOption[] = []
</script>

<style lang="scss" scoped>
:deep(.el-input) {
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