<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu
        router
        :default-active="defaultActive"
        background-color="transparent"
      >
        <template v-for="val in menuList">
          <el-sub-menu
            :index="val.path"
            v-if="val.children && val.children.length > 0"
            :key="val.path"
          >
            <template #title>
              <!-- <SvgIcon :name="val.meta.icon" /> -->
              <span>{{ val.meta.title }}</span>
            </template>
            <SubItem :chil="val.children" />
          </el-sub-menu>
          <el-menu-item :index="val.path" :key="val.path" v-else>
            <!-- <SvgIcon :name="val.meta.icon" /> -->
            <template #title>
              <span>{{ val.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SubItem from "./subMenu.vue";

export default defineComponent({
  name: "Aside",
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
    SubItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const state: any = reactive({
      menuList: [],
      defaultActive: route.path,
      isCollapse: false,
    });
    // 设置/过滤路由（非静态路由/是否显示在菜单中）
    const setFilterRoutes = () => {
      state.menuList = filterRoutesFun(store.state.routesList);
    };
    // 路由过滤递归函数
    const filterRoutesFun = (arr: Array<object>) => {
      return arr
        .filter((item: any) => !item.meta.isHide)
        .map((item: any) => {
          item = Object.assign({}, item);
          if (item.children) item.children = filterRoutesFun(item.children);
          return item;
        });
    };
    /**
     * @description 监听路由变化，切换菜单选中
     */
    watch(
      () => route.path,
      () => {
        state.defaultActive = route.path;
      }
    );
    /**
     * @description 加载前设置路由菜单
     */
    onBeforeMount(() => {
      setFilterRoutes();
    });
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: var(--el-color-white);
  box-shadow: var(--box-shadow);
  .el-menu {
    border-right: 0;
    background-color: var(--el-color-white);
  }
}
</style>
