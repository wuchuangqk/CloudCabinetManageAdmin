<template>
  <el-dialog v-model="show" title="选择站点" width="940px">
    <div class="search">
      <el-form ref="formRef" :model="params" inline label-position="right" label-width="68px">
        <el-form-item label="城市" prop="area">
          <!-- <el-cascader :options="areaData" :props="{ multiple: true }" v-model="params.area" @change="areaChange"
            collapse-tags clearable placeholder="请选择城市"></el-cascader> -->
          <el-input v-model="params.address" clearable placeholder="请输入社区名称" />
        </el-form-item>
        <el-form-item label="社区名称" prop="address">
          <el-input v-model="params.address" clearable placeholder="请输入社区名称" />
        </el-form-item>
        <el-form-item label="站点名称" prop="cabinetName">
          <el-input v-model="params.cabinetName" clearable placeholder="请输入站点名称" />
        </el-form-item>
      </el-form>
    </div>
    <div class="toolbar">
      <p>
        <span class="fs-14">查询到 {{ params.total }} 条数据，</span>
        <span class="fs-14">已选择 {{ selectedRows.length }} 条数据</span>
      </p>
      <div class="btns">
        <el-button @click="reset">重置</el-button>
        <!-- @todo 在第二页点查询，分页状态还停留在第二页（其实是第一页的数据） -->
        <el-button type="primary" :loading="loading" @click="fetchData(true)">查询</el-button>
      </div>
    </div>
    <el-table ref="tableRef" v-loading="loading" element-loading-text="请稍候" :data="tableData" stripe @select="select"
      @select-all="selectAll">
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
import { nextTick, onMounted, reactive, ref, shallowRef } from "vue";
import { table2 as getCabinetListAPI } from '@/api/yungui/station/stationBind/index'
import Pagination from "@/components/Pagination.vue";
import { fmt, includes } from "@/utils";

const call = defineEmits(['select'])
onMounted(() => {
  fetchData()
});
const params = reactive({
  offset: 0,
  limit: 15,
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
    val.status2Fmt = fmt(status2Options, val.status2)
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
  // 回显复选框勾选
  nextTick(() => {
    tableData.value.forEach(row => {
      if (includes(selectedRows.value, row).truest) {
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
  show.value = false
  call('select', selectedRows.value.map(row => {
    return Object.assign({ label: row.cabinetName, value: row.id }, row)
  }))
}
const status2Options = [
  { label: '未订阅', value: -1 },
  { label: '可用', value: 0 },
  { label: '禁用', value: 1 },
]
const tableRef = ref()
const selectedRows = ref<any[]>([]) // 选择的数据
const select = (selection, row) => {
  const { truest, index } = includes(selectedRows.value, row)
  // 选择
  if (includes(selection, row).truest) {
    if (!truest) {
      selectedRows.value.push(row)
    }
  } else {
    // 取消选择
    selectedRows.value.splice(index, 1)
  }
}
const selectAll = (selection: any[]) => {
  // 全选
  if (selection.length) {
    selection.forEach(row => {
      const { truest } = includes(selectedRows.value, row)
      if (!truest) {
        selectedRows.value.push(row)
      }
    })
  } else {
    // 全不选
    tableData.value.forEach(row => {
      const { truest, index } = includes(selectedRows.value, row)
      if (truest) {
        selectedRows.value.splice(index, 1)
      }
    })
  }
}
defineExpose({
  open
})
</script>

<style lang="scss" scoped>
.search {
  padding: 0;
  margin-bottom: 0;
}
</style>
