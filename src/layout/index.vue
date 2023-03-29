<template>
  <div :class="classObj" class="app-wrapper">
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
import {mapState} from "vuex";

export default {
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  computed:{
    ...mapState({
      sidebar: state => state.app.sidebar,
    }),
    classObj(){
      return {
        hideSidebar:!this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      }
    }
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
