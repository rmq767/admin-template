<template>
  <el-form
    class="login-content-form"
    ref="form"
    :model="ruleForm"
    :rules="rules"
  >
    <el-form-item prop="userName">
      <el-input
        type="text"
        placeholder="姓名"
        v-model="ruleForm.userName"
        clearable
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementUser /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="id">
      <el-input placeholder="身份证号" v-model="ruleForm.id" autocomplete="off">
        <template #prefix>
          <el-icon class="el-input__icon"><elementUnlock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input
        placeholder="手机号"
        v-model="ruleForm.phone"
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementPhone /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        placeholder="密码"
        v-model="ruleForm.password"
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementUnlock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="passwordAgain">
      <el-input
        placeholder="确认密码"
        v-model="ruleForm.passwordAgain"
        autocomplete="off"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><elementUnlock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
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
import { defineComponent, getCurrentInstance, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { userRegisterForm } from "./validateForm";
import VerifyCode from "@/components/VerifyCode.vue";
export default defineComponent({
  name: "LoginUserRegister",
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
      form: "",
      ruleForm: {
        userName: "",
        id: "",
        phone: "",
        password: "",
        passwordAgain: "",
        code: "5642",
      },
      loading: {
        signIn: false,
      },
    });
    const rules = userRegisterForm;
    const onSignIn = () => {};
    return { ...toRefs(state), onSignIn, rules };
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
