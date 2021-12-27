<template>
  <div class="pagination">
    <el-pagination
      v-model:currentPage="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  emits: ["handleSizeChange", "handleCurrentChange"],
  setup() {
    const { emit } = getCurrentInstance() as any;
    const handleSizeChange = (size: number) => {
      emit("handleSizeChange", size);
    };
    const handleCurrentChange = (page: number) => {
      emit("handleCurrentChange", page);
    };
    return { handleSizeChange, handleCurrentChange };
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
