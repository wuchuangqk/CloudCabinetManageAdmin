<template>
  <div class="page">
    <div class="search">
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
        <el-form-item>
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" :loading="loading" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="card">
      <div class="toolbar">
        <span>查询到{{tableData.length}}条数据</span>
        <div class="btns">
          <el-button type="primary" @click="show = true">新增</el-button>
          <el-button>导出</el-button>
        </div>
      </div>
      <el-table v-loading="loading" element-loading-text="加载中……" :data="tableData" stripe>
        <el-table-column prop="date" label="共配方" width="100" />
        <el-table-column prop="name" label="城市" width="100" />
        <el-table-column prop="address" label="站点" />
        <el-table-column prop="name" label="报价详情" />
        <el-table-column prop="name" label="状态" />
        <el-table-column prop="name" label="操作人" />
        <el-table-column prop="name" label="操作时间" />
      </el-table>
      <div class="pagination">
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total" />
      </div>
    </div>
    <TestForm v-model="show" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TestForm from "./components/TestForm.vue";

const params = ref({
  city: "",
  name: "",
  state: "",
});
const loading = ref(false);
const options = [
  { label: "张三", value: 1 },
  { label: "李四", value: 2 },
  { label: "王五", value: 3 },
];
const total = ref(100);
const pageIndex = ref(1);
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
const search = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

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