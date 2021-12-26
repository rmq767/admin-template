<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-content-main">
        <h4 class="login-content-title">后台管理系统</h4>
        <transition name="el-zoom-in-center" mode="out-in">
          <div v-if="!isRegister">
            <h3 class="login-title">账号登录</h3>
            <User />
          </div>
          <div v-else>
            <h3 class="login-title">用户注册</h3>
            <UserRegister />
          </div>
        </transition>
        <div class="other" @click="toRegister">
          {{ isRegister ? "返回登录" : "我要注册" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import User from "./components/User.vue";
import UserRegister from "./components/UserRegister.vue";
export default defineComponent({
  name: "Login",
  components: {
    User,
    UserRegister,
  },
  setup() {
    const isRegister = ref(false);
    /**
     * @description 切换注册登录
     */
    const toRegister = () => {
      isRegister.value = !isRegister.value;
    };
    return { toRegister, isRegister };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("https://gitee.com/lyt-top/vue-next-admin-images/raw/master/login/bg-login.png")
    no-repeat;
  background-size: 100% 100%;
  .login-content {
    width: 500px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate3d(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.99);
    border: 5px solid var(--color-primary-light-8);
    border-radius: 4px;
    transition: height 0.2s linear;
    overflow: hidden;
    z-index: 1;
    .login-content-main {
      margin: 0 auto;
      width: 80%;
      .login-content-title {
        color: #333;
        font-weight: 500;
        font-size: 22px;
        text-align: center;
        letter-spacing: 4px;
        margin: 15px 0 30px;
        white-space: nowrap;
        z-index: 5;
        position: relative;
        transition: all 0.3s ease;
      }
      .login-title {
        text-align: center;
        color: #333;
        font-weight: 500;
      }
    }
    .login-content-main-sacn {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      overflow: hidden;
      cursor: pointer;
      transition: all ease 0.3s;
      &-delta {
        position: absolute;
        width: 35px;
        height: 70px;
        z-index: 2;
        top: 2px;
        right: 21px;
        background: var(--el-color-white);
        transform: rotate(-45deg);
      }
      &:hover {
        opacity: 1;
        transition: all ease 0.3s;
        color: var(--color-primary);
      }
      i {
        width: 47px;
        height: 50px;
        display: inline-block;
        font-size: 48px;
        position: absolute;
        right: 2px;
        top: -1px;
      }
    }
    .other {
      position: absolute;
      right: 15px;
      bottom: 10px;
      &:hover {
        cursor: pointer;
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
