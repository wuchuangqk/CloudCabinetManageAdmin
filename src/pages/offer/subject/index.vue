<template>
  <div class="page">
    <div class="search">
      <el-form ref="formRef" :model="params" inline>
        <el-form-item label="状态" prop="status">
          <el-select v-model="params.status">
            <el-option
              v-for="option in options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
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
        <span class="fs-16">查询到 {{ params.total }} 条数据</span>
        <div class="btns">
          <el-button type="primary" @click="show = true">新增</el-button>
          <el-button>导出</el-button>
        </div>
      </div>
      <el-table
        v-loading="loading"
        element-loading-text="加载中……"
        :data="tableData"
        stripe
      >
        <el-table-column prop="businessName" label="业务类型" />
        <el-table-column prop="subName" label="报价科目" />
        <el-table-column prop="address" label="站点" />
        <el-table-column prop="statusText" label="状态" />
        <el-table-column prop="operatorName" label="操作人" />
        <el-table-column prop="operatorDatetime" label="操作时间" />
        <el-table-column label="操作">
          <template #default>
            <el-button link type="primary">编辑</el-button>
            <el-button link type="primary">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :params="params" @change="fetchData(true)" />
    </div>
    <TestForm v-model="show" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import TestForm from "./components/TestForm.vue";
import Pagination from "@/components/Pagination.vue";
import { quteoSubjectTableApi } from "@/api/yungui/offer/business.js";

onMounted(() => {
  fetchData();
});
const params = reactive({
  status: '',
  offset: 0,
  limit: 15,
  total: 0,
});
const options = [
  { label: "全部", value: "" },
  { label: "开启", value: 1 },
  { label: "关闭", value: 0 },
];
const loading = ref(false);
const tableData = ref([]);
const fetchData = async (search: boolean = false) => {
  loading.value = true;
  if (search) {
    params.offset = 0
  }
  const res = await quteoSubjectTableApi(params);
  res.data = res.data || []
  res.data.forEach((val: any) => {
    val.statusText = val.status === 1 ? "开启" : "关闭";
  });
  tableData.value = res.data;
  params.total = res.count;
  loading.value = false;
};
const formRef = ref();
const reset = () => {
  formRef.value.resetFields();
  fetchData(true)
}

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
