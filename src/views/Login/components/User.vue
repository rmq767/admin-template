<template>
  <el-form class="login-content-form">
    <el-form-item>
      <el-input
        type="text"
        placeholder="用户名 admin 或不输均为 test"
        v-model="ruleForm.userName"
        clearable
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementUser /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        :type="isShowPassword ? 'text' : 'password'"
        placeholder="密码：123456"
        v-model="ruleForm.password"
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementUnlock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-row :gutter="15">
        <el-col :span="16">
          <el-input
            type="text"
            maxlength="4"
            placeholder="请输入验证码"
            v-model="ruleForm.code"
            clearable
            autocomplete="off"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><elementPosition /></el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div class="login-content-code">
            <VerifyCode :identifyCode="ruleForm.code"></VerifyCode>
          </div>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="login-content-submit"
        round
        @click="onSignIn"
        :loading="loading.signIn"
      >
        <span>登 录</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Session } from "@/utils/session";
import { defineComponent, getCurrentInstance, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import VerifyCode from "@/components/VerifyCode.vue";
import { ElMessage } from "element-plus";
import { initFrontEndControlRoutes } from "@/router/frond";
export default defineComponent({
  name: "LoginUser",
  components: {
    VerifyCode,
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      isShowPassword: false,
      ruleForm: {
        userName: "admin",
        password: "123456",
        code: "7895",
      },
      loading: {
        signIn: false,
      },
    });
    const onSignIn = async () => {
      let info = {
        roles: ["admin"],
      };
      Session.set("token", "token");
      Session.set("userInfo", info);
      /**
       * @description 添加动态路由
       */
      await initFrontEndControlRoutes();
      router.push("/");
      ElMessage.success("登录成功！");
    };
    return { ...toRefs(state), onSignIn };
  },
});
</script>

<style lang="scss" scoped>
.login-content-form {
  margin-top: 20px;
  .login-content-password {
    display: inline-block;
    width: 25px;
    cursor: pointer;
    &:hover {
      color: #909399;
    }
  }
  .login-content-code {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .login-content-code-img {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #ffffff;
      border: 1px solid rgb(220, 223, 230);
      color: #333;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 5px;
      text-indent: 5px;
      text-align: center;
      cursor: pointer;
      transition: all ease 0.2s;
      border-radius: 4px;
      user-select: none;
      &:hover {
        border-color: #c0c4cc;
        transition: all ease 0.2s;
      }
    }
  }
  .login-content-submit {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
  }
}
</style>
