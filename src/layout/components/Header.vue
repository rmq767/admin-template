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
              <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
              <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
              <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
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
import { useRouter } from "vue-router";
import { Session } from "@/utils/session";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "Header",
  components: {
    ArrowDown,
  },
  setup() {
    const router = useRouter();
    const chooseMenu = (menu: string) => {
      switch (menu) {
        case "userInfo":
          toUserInfoPage();
          break;
        case "changePwd":
          toChangePwd();
          break;
        case "loginOut":
          LoginOut();
          break;
      }
    };
    /**
     * @description 跳转个人信息
     */
    const toUserInfoPage = () => {
      router.push("/about");
    };
    /**
     * @description 跳转个人信息
     */
    const toChangePwd = () => {
      router.push("/changepassword");
    };
    /**
     * @description 退出登录操作
     */
    const LoginOut = () => {
      Session.clear();
      router.push("/login");
      ElMessage.success("退出登录！");
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
