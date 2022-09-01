<template>
  <el-dialog :model-value="modelValue" title="表单" width="800px">
    <el-form ref="formRef" :model="params" inline>
      <el-form-item label="城市" prop="city">
        <el-input v-model="params.city" />
      </el-form-item>
      <el-form-item label="站点" prop="name">
        <el-select v-model="params.name">
          <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select v-model="params.state">
          <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="close">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: boolean
}>()
const call = defineEmits(['update:modelValue'])
const close = () => {
  call('update:modelValue', false)
}

const params = ref({
  city: '',
  name: '',
  state: ''
})
const options = [
  { label: '张三', value: 1 },
  { label: '李四', value: 2 },
  { label: '王五', value: 3 },
]
</script>

<style lang="scss" scoped>
</style>