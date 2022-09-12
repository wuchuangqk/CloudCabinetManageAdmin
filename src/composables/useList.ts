import { ref } from "vue";
const useList = () => {
  const loading = ref(false);
  const total = ref(0);
  const tableData = ref([])

  return {
    loading,
    total,
    tableData
  }
}

export default useList