<template>
  <div class="page">
    <div class="search">
      <el-form :model="params" inline>
        <el-form-item label="城市">
          <el-input v-model="params.city" />
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="params.city" />
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="params.city" />
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" :loading="loading" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="card">
      <div class="toolbar">
        <el-button type="primary">新增</el-button>
        <el-button>导出</el-button>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Tab } from '@mzx_qk/ui'
import { useRouter } from 'vue-router';
import { Loading } from '@element-plus/icons-vue'

const params = ref({
  city: ''
})
const loading = ref(false)
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
const search = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000);
}
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
  justify-content: flex-end;
  margin-bottom: 10px;
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