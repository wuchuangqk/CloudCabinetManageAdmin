<template>
  <el-dialog v-model="show" title="选择站点" width="800px">
    <div class="search">
      <el-form ref="formRef" :model="params" inline label-position="right" label-width="82px">
        <!-- <el-form-item label="城市" prop="area">
              <el-cascader :options="areaData" :props="{ multiple: true }" v-model="params.area" @change="areaChange"
                collapse-tags clearable placeholder="请选择城市"></el-cascader>
            </el-form-item> -->
        <el-form-item label="社区名称" prop="address">
          <el-input v-model="params.address" clearable placeholder="请输入社区名称" />
        </el-form-item>
        <el-form-item label="站点名称" prop="cabinetName">
          <el-input v-model="params.cabinetName" clearable placeholder="请输入站点名称" />
        </el-form-item>
        <div class="btns">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" :loading="loading" @click="fetchData(true)">查询</el-button>
        </div>
      </el-form>
    </div>
    <div class="toolbar">
        <span class="fs-16">查询到 {{ params.total }} 条数据</span>
        <span class="fs-16">，已选择 {{ params.total }} 条数据</span>
      </div>
      {{a}}
    <el-table ref="tableRef" v-loading="loading" element-loading-text="请稍候" :data="tableData" stripe @select="select" @select-all="selectAll">
      <el-table-column type="selection" align="center" width="55" />
      <el-table-column prop="cabinetName" label="站点名称" show-overflow-tooltip />
      <el-table-column prop="status2Fmt" label="状态" show-overflow-tooltip />
    </el-table>
    <Pagination :params="params" @change="fetchData" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="show = false">取消</el-button>
        <el-button type="primary" :loading="loading" @click="submit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, shallowRef } from "vue";
import { table2 as getCabinetListAPI } from '@/api/yungui/station/stationBind/index'
import Pagination from "@/components/Pagination.vue";
import { fmt } from "@/utils";

const props = defineProps<{
}>()
onMounted(() => {
  fetchData()
});
const params = reactive({
  offset: 0,
  limit: 2,
  total: 0,
  address: '', // 社区名称
  cabinetName: '', // 站点名称
})
const show = ref(false)
const loading = ref(false)
const tableData = shallowRef()
const open = (params) => {
  show.value = true

}
const fetchData = async (search: boolean = false) => {
  loading.value = true;
  if (search) params.offset = 0
  const res = await getCabinetListAPI(params);
  res.data = res.data || []
  res.data.forEach((val: any) => {
    // val.templateTypeFmt = val.templateType === 1 ? '单面' : '双面'
    val.status2Fmt = fmt(status2Options, val.status2)
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
  nextTick(() => {
    tableData.value.forEach(row => {
      if (arr.value.some(val => val.id === row.id)) {
        tableRef.value.toggleRowSelection(row, true)
      }
    })
  })
};
const formRef = ref();
const reset = () => {
  formRef.value && formRef.value.resetFields();
  fetchData(true)
}
const submit = () => {

}
const status2Options = [
  { label: '未订阅', value: -1 },
  { label: '可用', value: 0 },
  { label: '禁用', value: 1 },
]
const tableRef = ref()
const arr = ref([])
const a = computed(() => {
  return arr.value.map(val => val.cabinetName)
})
const select = (checkedArr, current) => {
  const isChecked = checkedArr.some(val => val.id === current.id)
  if (isChecked) {
    if (!arr.value.some(val => val.id === current.id)) {
      arr.value.push(current)
    }
  } else {
    const index = arr.value.findIndex(val => val.id === current.id)
    if (index !== -1) {
      arr.value.splice(index, 1)
    }
  }
}
// TODO 处理selectAll事件
const selectAll = () => {

}
const inCludes = (arr, target) => {

}
defineExpose({
  open
})
</script>

<style lang="scss" scoped>

</style>
