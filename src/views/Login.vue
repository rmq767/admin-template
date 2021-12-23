<template>
  <div>
    <div
      class="login-content"
      :class="{ 'login-content-mobile': tabsActiveName === 'mobile' }"
    >
      <div class="login-content-main">
        <h4 class="login-content-title">
          {{ getThemeConfig.globalTitle }}后台模板
        </h4>
        <div v-if="!isScan">
          <el-tabs v-model="tabsActiveName" @tab-click="onTabsClick" stretch>
            <el-tab-pane
              label="账号密码登录"
              name="account"
              :disabled="tabsActiveName === 'account'"
            >
              <transition name="el-zoom-in-center">
                <Account v-show="isTabPaneShow" />
              </transition>
            </el-tab-pane>
            <!-- <el-tab-pane label="手机号登录" name="mobile" :disabled="tabsActiveName === 'mobile'">
							<transition name="el-zoom-in-center">
								<Mobile v-show="!isTabPaneShow" />
							</transition>
						</el-tab-pane> -->
          </el-tabs>
          <!-- <div class="mt10">
						<el-button type="text" size="small">第三方登录</el-button>
						<el-button type="text" size="small">友情链接</el-button>
					</div> -->
        </div>
        <!-- <Scan v-else /> -->
        <!-- <div class="login-content-main-sacn" @click="isScan = !isScan">
					<i class="iconfont" :class="isScan ? 'icon-diannao1' : 'icon-barcode-qr'"></i>
					<div class="login-content-main-sacn-delta"></div>
				</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
