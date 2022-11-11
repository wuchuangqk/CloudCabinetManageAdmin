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
          <el-col :span="6">
            <el-form-item label="生产厂商" prop="manufacturers">
              <el-input v-model="params.manufacturers" clearable placeholder="请输入生产厂商" />
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
        <span class="fs-16">查询到 {{ params.total }} 条数据</span>
        <div class="btns">
          <el-button type="primary" @click="show = true">新增</el-button>
        </div>
      </div>
      <el-table v-loading="loading" element-loading-text="请稍候" :data="tableData" stripe>
        <el-table-column type="selection" label="业务类型" align="center" width="55" />
        <el-table-column prop="id" label="站点ID" show-overflow-tooltip />
        <el-table-column prop="cabinetCode" label="站点编号" show-overflow-tooltip />
        <el-table-column prop="cabinetName" label="站点名称" show-overflow-tooltip />
        <el-table-column prop="cabinetTypeName" label="类型" show-overflow-tooltip />
        <el-table-column prop="stationId" label="第三方站点编号" show-overflow-tooltip />
        <el-table-column prop="twoSidedFmt" label="单/双面" show-overflow-tooltip />
        <el-table-column prop="remark" label="备注" show-overflow-tooltip />
        <el-table-column prop="cabinetQty" label="柜子数" show-overflow-tooltip />
        <el-table-column prop="duration" label="消杀时长" show-overflow-tooltip />
        <el-table-column prop="mainboard" label="主板编号" show-overflow-tooltip />
        <el-table-column prop="simcard" label="物联网卡号" show-overflow-tooltip />
        <el-table-column prop="province" label="省" show-overflow-tooltip />
        <el-table-column prop="city" label="市" show-overflow-tooltip />
        <el-table-column prop="district" label="区" show-overflow-tooltip />
        <el-table-column prop="community" label="社区/小区" show-overflow-tooltip />
        <el-table-column prop="address" label="详细地址" show-overflow-tooltip />
        <el-table-column prop="building" label="楼栋" show-overflow-tooltip />
        <el-table-column prop="floor" label="楼层" show-overflow-tooltip />
        <el-table-column prop="statusFmt" label="状态" show-overflow-tooltip />
        <el-table-column prop="isOnlineFmt" label="是否在线" show-overflow-tooltip />
        <el-table-column prop="operatorName" label="操作人" show-overflow-tooltip />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" @click="edit(scope.row)">编辑</el-button>
            <el-button link type="primary" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :params="params" @change="fetchData" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, shallowRef } from "vue";
import Pagination from "@/components/Pagination.vue";
import { table as getRecordListAPI, del, add, edit } from "@/api/yungui/station/stationCabinet/index";
import { ElMessageBox, ElMessage } from 'element-plus'
import { fmt } from '@/utils/index'

onMounted(() => {
  // fetchData();
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
    // val.statusFmt = fmt(statusOptions, val.status)
    // val.isOnlineFmt = fmt(isOnlineOptions, val.isOnline)
    val.templateTypeFmt = val.templateType === 1 ? '单面' : '双面'
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
};
const formRef = ref();
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
</script>

<style lang="scss" scoped>

</style>
