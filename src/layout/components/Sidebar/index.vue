<template>
  <div class="has-logo" :style="{backgroundColor:settings.sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground}">
    <Logo/>
    <el-scrollbar wrap-class="scrollbar-wrapper">

    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "@/layout/components/Sidebar/Logo.vue";
import variables from "@/assets/styles/variables.module.scss";

console.log(variables)
import {mapState} from "vuex";

export default {
  components: {Logo},
  computed:{
    ...mapState(["settings"]),
    variables() {
      return variables;
    },
  }

}
</script>

<style lang="scss" scoped>

</style>
