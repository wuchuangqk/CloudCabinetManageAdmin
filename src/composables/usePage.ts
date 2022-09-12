import { ref } from "vue";
const usePage = (search?: Function) => {
  const offset = ref(0);
  const limit = ref(15);
  const pageChange = (_offset: number, _limit: number) => {
    offset.value = _offset
    limit.value = _limit
    search && search()
  }

  return {
    offset,
    limit,
    pageChange
  }
}

export default usePage