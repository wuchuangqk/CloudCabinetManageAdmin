<template>
  <div class="app-list-page">
    <div class="search">
      <el-form ref="formRef" :model="params" inline label-position="right" label-width="96px">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="单面/双面" prop="templateType">
              <el-select v-model="params.templateType" clearable placeholder="请选择单面/双面">
                <el-option v-for="option in templateTypeOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="柜体方案编号" prop="templateCode">
              <el-input v-model="params.templateCode" clearable placeholder="请输入柜体方案编号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="柜体方案名称" prop="templateName">
              <el-input v-model="params.templateName" clearable placeholder="请输入柜体方案名称" />
            </el-form-item>
          </el-col>
          <!-- <el-col :span="6">
            <el-form-item label="生产厂商" prop="manufacturers">
              <el-input v-model="params.manufacturers" clearable placeholder="请输入生产厂商" />
            </el-form-item>
          </el-col> -->
          <el-col :span="6">
            <el-form-item label="生产厂商" prop="manufacturers">
              <RichSelect v-model="params.manufacturers" :options="cabinetOptions" @trigger="showCabinet" />
            </el-form-item>
          </el-col>
        </el-row>
        <div class="btns">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" :loading="loading" @click="fetchData(true)">查询</el-button>
        </div>
      </el-form>
    </div>
    <div class="card">
      <div class="toolbar">
        <span class="fs-14">查询到 {{ params.total }} 条数据</span>
        <div class="btns">
          <el-button type="primary" @click="show = true">新增</el-button>
        </div>
      </div>
      <el-table v-loading="loading" element-loading-text="请稍候" :data="tableData" stripe>
        <el-table-column type="selection" label="业务类型" align="center" width="55" />
        <el-table-column prop="templateTypeFmt" label="单面/双面" show-overflow-tooltip width="100" />
        <el-table-column prop="templateCode" label="柜体方案编号" show-overflow-tooltip width="120" />
        <el-table-column prop="templateName" label="柜体方案名称" show-overflow-tooltip width="120" />
        <el-table-column prop="manufacturers" label="生产厂商" show-overflow-tooltip />
        <el-table-column prop="quotation" label="对外报价(元)" show-overflow-tooltip width="120" />
        <el-table-column prop="maxQty" label="大格数量" show-overflow-tooltip />
        <el-table-column prop="maxNum" label="大格序号" show-overflow-tooltip />
        <el-table-column prop="normalQty" label="中格数量" show-overflow-tooltip />
        <el-table-column prop="normalNum" label="中格序号" show-overflow-tooltip />
        <el-table-column prop="minQty" label="小格数量" show-overflow-tooltip />
        <el-table-column prop="minNum" label="小格序号" show-overflow-tooltip />
        <el-table-column prop="bindingQty" label="捆扎带数量" show-overflow-tooltip width="120" />
        <el-table-column prop="bindingNum" label="捆扎带序号" show-overflow-tooltip width="120" />
        <el-table-column prop="handcartQty" label="搬运车数量" show-overflow-tooltip width="120" />
        <el-table-column prop="handcartNum" label="搬运车序号" show-overflow-tooltip width="120" />
        <el-table-column prop="operatorName" label="操作人(最后一次)" show-overflow-tooltip width="140" />
        <el-table-column prop="operatorDate" label="操作时间(最后一次)" show-overflow-tooltip width="160" />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" @click="edit(scope.row)">编辑</el-button>
            <el-button link type="primary" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :params="params" @change="fetchData" />
      <CabinetFilter ref="cabinetFilterRef" @select="(result) => cabinetOptions = result" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, shallowRef } from "vue";
import Pagination from "@/components/Pagination.vue";
import { table as getRecordListAPI, del, add, edit } from "@/api/yungui/station/stationCabinet/index";
import { ElMessageBox, ElMessage } from 'element-plus'
import { fmt } from '@/utils/index'
import RichSelect from '@/components/RichSelect.vue'
import CabinetFilter from '@/components/CabinetFilter.vue'

onMounted(() => {
  fetchData();
});
const params = reactive({
  offset: 0,
  limit: 15,
  total: 0,
  templateCode: '', // 柜体方案编号
  templateName: '', // 柜体方案名称
  manufacturers: '', // 生产厂商
  templateType: '', // 单面/双面
});
const loading = ref(false);
const tableData = shallowRef([]);
const fetchData = async (search: boolean = false) => {
  loading.value = true;
  if (search) params.offset = 0
  const res = await getRecordListAPI(params);
  res.data = res.data || []
  res.data.forEach((val: any) => {
    val.templateTypeFmt = val.templateType === 1 ? '单面' : '双面'
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
};
const formRef = ref();
// @todo 重置对站点下拉框不起作用
const reset = () => {
  formRef.value && formRef.value.resetFields();
  fetchData(true)
}
const templateTypeOptions = [
  { label: "全部", value: "" },
  { label: "单面", value: 1 },
  { label: "双面", value: 2 },
];
const show = ref(false);
const edit = (rowVal) => {
}
const del = async (rowVal) => {
  await ElMessageBox.confirm('确认删除吗？')
  ElMessage.success('删除成功')
  fetchData()
}

const cabinetFilterRef = ref()
const showCabinet = () => {
  cabinetFilterRef.value && cabinetFilterRef.value.open()
}
const cabinetOptions = shallowRef([])
</script>

<style lang="scss" scoped></style>
