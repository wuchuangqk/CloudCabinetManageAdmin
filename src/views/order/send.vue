<template>
  <div class="app-list-page">
    <div class="search">
      <el-form ref="formRef" :model="params" inline label-position="right" label-width="70px">
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="订单状态" prop="statuss">
              <el-select v-model="params.statuss" multiple collapse-tags clearable placeholder="全部">
                <el-option v-for="option in statusOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号" prop="orderNo">
              <el-input v-model.trim="params.orderNo" clearable placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入柜时间">
              <el-date-picker v-model="inTime" type="datetimerange" value-format="YYYY-MM-DD HH:mm"
                format="YYYY-MM-DD HH:mm" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="格口类型" prop="types">
              <el-select v-model="params.types" multiple collapse-tags clearable placeholder="全部">
                <el-option v-for="option in cabinetTypeOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="格口编号" prop="cabinetdtlCode">
              <el-input v-model.trim="params.cabinetdtlCode" clearable placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否并柜" prop="isMerge">
              <el-select v-model="params.isMerge" clearable placeholder="全部">
                <el-option v-for="option in isMergeOptions" :key="option.value" :label="option.label"
                  :value="option.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 
          <el-col></el-col>
          <el-col></el-col> -->
        </el-row>
        <el-form-item>
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" :loading="loading" @click="fetchData(true)">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="card">
      <div class="toolbar">
        <span class="fs-14">查询到 {{ params.total }} 条数据</span>
        <div class="btns">
          <el-button>导出</el-button>
        </div>
      </div>
      <el-table v-loading="loading" element-loading-text="请稍候" :data="tableData" stripe>
        <el-table-column label="序号" type="index" show-overflow-tooltip width="60" fixed="left" />
        <el-table-column label="订单号" prop="orderNo" show-overflow-tooltip fixed="left">
          <template #default="scope">
            <el-button link type="primary" @click="detail(scope.row)">{{scope.row.orderNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="取件码" prop="pwd" show-overflow-tooltip />
        <el-table-column label="快递公司" prop="expCompanyName" show-overflow-tooltip width="120" />
        <el-table-column label="订单状态" prop="statusFmt" show-overflow-tooltip />
        <el-table-column label="站点名称" prop="cabinetName" show-overflow-tooltip />
        <el-table-column label="站点地址" prop="addressDetail" show-overflow-tooltip />
        <el-table-column label="格口类型" prop="typeFmt" show-overflow-tooltip />
        <el-table-column label="格口编号" prop="cabinetdtlCode" show-overflow-tooltip />
        <el-table-column label="递送员" prop="operatorAll" show-overflow-tooltip width="160" />
        <el-table-column label="取件人" prop="outOperatorName" show-overflow-tooltip />
        <el-table-column label="是否消杀" prop="isSterilizeFmt" show-overflow-tooltip />
        <el-table-column label="是否并柜" prop="isMergeFmt" show-overflow-tooltip />
        <el-table-column label="收件人" prop="receiveTel" show-overflow-tooltip width="110" />
        <el-table-column label="下单时间" prop="operatorDate" show-overflow-tooltip width="160" />
        <el-table-column label="入柜时间" prop="beginDate" show-overflow-tooltip width="160" />
        <el-table-column label="入柜完成时间" prop="endDate" show-overflow-tooltip width="160" />
        <el-table-column label="取出时间" prop="outDate" show-overflow-tooltip width="160" />
        <el-table-column label="拒收时间" prop="refuseDate" show-overflow-tooltip width="160" />
      </el-table>
      <Pagination :params="params" @change="fetchData" />
    </div>
    <Detail ref="detailRef" order-type="send" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from "vue";
import Pagination from "@/components/Pagination.vue";
import { table as getOrderAPI } from "@/api/yungui/cabinet/order.js";
import Detail from './components/Detail.vue'
import useOptions from './composables/useOptions'
import { fmt } from '@/utils/index'

onMounted(() => {
  fetchData();
});
const { statusOptions, cabinetTypeOptions, isMergeOptions } = useOptions()
const params = reactive({
  offset: 0, // 分页偏移
  limit: 15, // 分页条数
  total: 0, // 总条数
  statuss: [], // 订单状态
  orderNo: '', // 订单号
  endDateBegin: '', // 入柜时间起
  endDateEnd: '', // 入柜时间止
  types: [], // 格口类型
  cabinetdtlCode: '', // 格口编号
  isMerge: '', // 是否并柜
});
const loading = ref(false);
const tableData = ref([]);
const fetchData = async (search: boolean = false) => {
  loading.value = true;
  if (search) params.offset = 0;
  const res = await getOrderAPI(params);
  res.data = res.data || [];
  res.data.forEach((val: any) => {
    val.isSterilizeFmt = val.isSterilize === 0 ? '否' : '是'
    val.isMergeFmt = val.isMerge === 0 ? '否' : '是'
    val.statusFmt = fmt(statusOptions, val.status)
    if (val.status === 3) val.statusFmt = '换柜'
    if (val.status === -1) val.endDate = ''
    val.typeFmt = fmt(cabinetTypeOptions, val.type)
    val.addressDetail = val.district + val.community + val.building + val.address
    val.gekouCode = val.code && val.num ? `${val.code}-${val.num}` : ''
    val.operatorAll = `${val.operatorName || ''}${val.operatorTel || ''}`
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
};
const inTime = computed({
  get() {
    return [params.endDateBegin, params.endDateEnd]
  },
  set(newVal: string[]) {
    if (newVal) {
      params.endDateBegin = newVal[0]
      params.endDateEnd = newVal[1]
    } else {
      params.endDateBegin = ''
      params.endDateEnd = ''
    }
  }
})
const formRef = ref();
const reset = () => {
  formRef.value && formRef.value.resetFields();
  inTime.value = ['', '']
  fetchData(true);
};
const showDetail = ref(false)
const detailRef = ref()
// 订单详情
const detail = (rowVal) => {
  showDetail.value = true
  detailRef.value && detailRef.value.open(rowVal)
}
</script>

<style lang="scss" scoped>
</style>
