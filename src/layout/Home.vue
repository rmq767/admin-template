<template>
  <el-container class="layout-container">
    <Header />
    <el-container class="layout-backtop">
      <Aside />
      <Main />
    </el-container>
    <el-backtop target=".layout-backtop .el-scrollbar__wrap"></el-backtop>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default defineComponent({
  name: "",
  components: {
    Aside,
    Header,
    Main,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
