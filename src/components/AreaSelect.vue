<template>
  <el-cascader :options="areaData" :props="{ multiple }" :model-value="modelValue" @change="change" collapse-tags
    :clearable="clearable"></el-cascader>
</template>
<script lang="ts">
export default {
  name: "AreaSelect",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import areaData from "@/utils/areaData";

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
const call = defineEmits(["update:modelValue"]);
const change = () => {

};

</script>

<style lang="scss" scoped>

</style>