<template>
  <el-dialog
    :model-value="modelValue"
    title="表单"
    width="600px"
    :before-close="close"
    :close-on-click-modal="false"
  >
    <div class="center">
      <el-form
        ref="formRef"
        :model="formData"
        label-position="right"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="业务类型" prop="busId">
          <el-select v-model="formData.busId">
            <el-option
              v-for="option in busIdOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="报价科目" prop="subId">
          <el-select v-model="formData.subId">
            <el-option
              v-for="option in subIdOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否开启" prop="status">
          <el-radio-group v-model="formData.status">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" :loading="loading" @click="submit">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import {
  quteoSubjectList,
  quteoBusTypeList,
} from "@/api/yungui/offer/business";
import type { FormInstance, FormRules } from "element-plus";

defineProps<{
  modelValue: boolean;
}>();
const call = defineEmits(["update:modelValue"]);
const close = () => {
  if (!loading.value) {
    call("update:modelValue", false);
    formRef.value && formRef.value.resetFields();
  }
};
onMounted(() => {
  quteoSubjectList().then((res) => {
    busIdOptions.value = res.data.map((val) => {
      return {
        label: val.subName,
        value: val.id,
      };
    });
  });
  quteoBusTypeList().then((res) => {
    subIdOptions.value = res.data.map((val) => {
      return {
        label: val.businessName,
        value: val.id,
      };
    });
  });
});
const loading = ref(false);
const formRef = ref<FormInstance>();
const formData = reactive({
  busId: "", // 业务类型
  subId: "", // 报价科目
  status: 1, // 是否开启
});
const rules: FormRules = {
  busId: [
    {
      required: true,
      message: "请选择业务类型",
      trigger: "change",
    },
  ],
  subId: [
    {
      required: true,
      message: "请选择报价科目",
      trigger: "change",
    },
  ],
};

const busIdOptions = ref<IOption[]>([]);
const subIdOptions = ref<IOption[]>([]);
const submit = async () => {
  if (!formRef.value || loading.value) return;
  try {
    await formRef.value.validate();
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      ElMessage("修改成功");
      close();
    }, 2000);
  } catch (error) {}
};
</script>

<style lang="scss" scoped>
.center {
  width: 400px;
  margin: 0 auto;
}
.el-select {
  width: 100%;
}
</style>
