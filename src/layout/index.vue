<template>
  <div class="app-wrapper">
    <el-scrollbar>
      <sidebar class="sidebar-container"/>
      <div class="main-container">
        <Navbar/>
        <app-main/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import {AppMain, Sidebar} from "@/layout/components";
import Navbar from "@/layout/components/Navbar.vue";

export default {
  components: {
    Navbar,
    AppMain,
    Sidebar
  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  .el-scrollbar {
    height: 100%;
  }

  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
