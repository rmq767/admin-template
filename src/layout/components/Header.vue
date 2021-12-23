<template>
  <el-header>
    <div class="header">
      <h2 class="title">医院挂号系统</h2>
      <div class="user">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <el-dropdown trigger="click" @command="chooseMenu">
          <span class="el-dropdown-link">
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="1">Action 1</el-dropdown-item>
              <el-dropdown-item command="2">Action 2</el-dropdown-item>
              <el-dropdown-item command="3">Action 3</el-dropdown-item>
              <el-dropdown-item command="4">Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
export default defineComponent({
  name: "Header",
  components: {
    ArrowDown,
  },
  setup() {
    const chooseMenu = (menu: string) => {
      console.log(menu);
    };
    return { chooseMenu };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .user {
    display: flex;
    align-items: center;
  }
}
.el-header {
  background-color: var(--el-color-white);
  box-shadow: var(--box-shadow);
}
</style>
