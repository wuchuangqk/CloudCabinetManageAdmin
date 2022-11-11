<template>
  <div class="app-list-page">
    <div class="search">
      <el-form ref="formRef" :model="params" inline label-position="right" label-width="82px">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="城市" prop="area">
              <el-cascader :options="areaData" :props="{ multiple: true }" v-model="params.area" @change="areaChange"
                collapse-tags clearable placeholder="请选择城市"></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="关键词" prop="cabinetNameOraddress">
              <el-input v-model="params.cabinetNameOraddress" clearable placeholder="请输入站点名称或地址" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="类型" prop="type">
              <el-select v-model="params.type" clearable placeholder="请选择类型">
                <el-option v-for="option in typeOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="状态" prop="status">
              <el-select v-model="params.status" clearable placeholder="请选择状态">
                <el-option v-for="option in statusOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否在线" prop="isOnline">
              <el-select v-model="params.isOnline" clearable placeholder="请选择是否在线">
                <el-option v-for="option in isOnlineOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="物联网卡号" prop="simcard">
              <el-input v-model="params.simcard" clearable placeholder="请输入物联网卡号" />
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
import {
  table as getRecordListAPI,
  add,
  del,
  update,
  subscribe,
  BathCabinetOnOffApi,
  cabinettypeList,
  importExcelByCabinet
} from '@/api/yungui/station/stationRecord/index'
import { ElMessageBox, ElMessage } from 'element-plus'
import { fmt } from '@/utils/index'
import areaData from "@/utils/areaData";

onMounted(() => {
  fetchData();
  getTypeOptions()
});
const params = reactive({
  offset: 0,
  limit: 15,
  total: 0,
  status: '', // 状态
  isOnline: '', // 是否在线
  area: [],
  province: '', // 省
  city: '', // 市
  districts: [], // 区
  cabinetNameOraddress: '', // 站点名称或地址
  type: '', // 类型
  simcard: '', // 物联网卡号
});
const loading = ref(false);
const tableData = shallowRef([]);
const fetchData = async (search: boolean = false) => {
  loading.value = true;
  if (search) params.offset = 0
  const res = await getRecordListAPI(params);
  res.data = res.data || []
  res.data.forEach((val: any) => {
    val.statusFmt = fmt(statusOptions, val.status)
    val.isOnlineFmt = fmt(isOnlineOptions, val.isOnline)
    val.twoSidedFmt = val.twoSided === 1 ? '单面' : '双面'
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
const options = [
  { label: "全部", value: "" },
  { label: "开启", value: 1 },
  { label: "关闭", value: 0 },
];
const statusOptions = [
  { label: "未联网", value: -1 },
  { label: "可用", value: 0 },
  { label: "禁用", value: 1 },
]
const isOnlineOptions = [
  { label: "在线", value: 1 },
  { label: "离线", value: 0 },
]
const show = ref(false);
const edit = (rowVal) => {
}
const del = async (rowVal) => {
  await ElMessageBox.confirm('确认删除吗？')
  ElMessage.success('删除成功')
  fetchData()
}
const areaChange = (arr) => {
  if (arr.length === 0) {
    params.province = ''
    params.city = ''
    params.districts = []
  } else {
    // arr = [[省，市，区],[省，市，区]]
    params.province = arr[0][0]
    params.city = arr[0][1]
    const districtSet = new Set()
    arr.forEach(val => {
      districtSet.add(val[2])
    })
    params.districts = Array.from(districtSet) as any
  }
}
const typeOptions = shallowRef<IOption[]>([])
const getTypeOptions = () => {
  cabinettypeList({ cabinetType: 1 }).then(res => {
    typeOptions.value = (res.data || []).map(val => {
      return {
        label: val.cabinetTypeName,
        value: val.cabinetTypeCode
      }
    })
  })
}
</script>

<style lang="scss" scoped>

</style>
