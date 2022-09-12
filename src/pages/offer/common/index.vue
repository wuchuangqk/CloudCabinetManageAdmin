<template>
  <div class="page">
    <div class="search">
      <el-form ref="formRef" :model="params" inline>
        <!-- <el-form-item label="城市" prop="city">
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
        </el-form-item> -->
        <el-form-item>
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" :loading="loading" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="card">
      <div class="toolbar">
        <span class="fs-16">查询到 {{total}} 条数据</span>
        <div class="btns">
          <el-button type="primary" @click="show = true">新增</el-button>
          <el-button>导出</el-button>
        </div>
      </div>
      <el-table v-loading="loading" element-loading-text="加载中……" :data="tableData">
        <el-table-column prop="coFormulationName" label="共配方" />
        <el-table-column prop="provinceCity" label="城市" />
        <el-table-column prop="cabinetName" label="站点" />
        <el-table-column prop="offerInfoText" label="报价详情" />
        <el-table-column prop="statusText" label="状态" />
        <el-table-column prop="operatorName" label="操作人" />
        <el-table-column prop="updateTime" label="操作时间" />
        <el-table-column label="操作">
          <template #default>
            <el-button link type="primary">编辑</el-button>
            <el-button link type="primary">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="pagination">
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total"
          v-model:current-page="pageIndex" />
      </div> -->
      <Pagination :total="total" @change="pageChange" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { doPost } from "@/utils/request";
import { ref } from "vue";
import Pagination from '@/components/Pagination.vue'
import { useList, usePage } from "@/composables/index";

const params = ref({
  // city: "",
  // name: "",
  // state: "",
  offset: 0,
  limit: 10,
});
const { loading, total, tableData } = useList()

const options = [
  { label: "张三", value: 1 },
  { label: "李四", value: 2 },
  { label: "王五", value: 3 },
];
const search = () => {
  loading.value = true;
  params.value.offset = offset.value
  params.value.limit = limit.value
  doPost('/cwcs/condisstr/queryListCondisstr', params.value).then(res => {
    res.data.forEach((val: any) => {
      val.provinceCity = val.province + val.city
      val.statusText = val.status === 1 ? '开启' : '关闭'
      val.offerInfoText = val.offerInfo += '元/件'
    })
    tableData.value = res.data
    total.value = res.count
    loading.value = false
  })
};
const { offset, limit, pageChange } = usePage(search)
search()
const formRef = ref();
const reset = () => {
  formRef.value.resetFields();
  search();
};

const show = ref(false);
</script>

<style lang="scss" scoped>
.page {
  padding: 16px;
}

.card {
  padding: 16px;
  background-color: white;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .btns {
    display: flex;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.search {
  padding: 16px;
  padding-bottom: 0;
  background-color: white;
  margin-bottom: 16px;

  .el-input {
    width: 200px;
  }
}
</style>