<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" @toggleClick="toggleSideBar" class="hamburger-container"/>
    <div class="right-menu">
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <el-tooltip content="布局大小" effect="dark" placement="bottom">
        <size-select id="size-select" class="right-menu-item hover-effect" />
      </el-tooltip>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <!--<img :src="avatar" class="user-avatar">-->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger/index.vue";
import {mapGetters} from "vuex";
import Screenfull from "@/components/Screenfull/index.vue";
import SizeSelect from "@/components/SizeSelect/index.vue";

export default {
  components:{
    Screenfull,
    Hamburger,
    SizeSelect
  },
  computed:{
    ...mapGetters([
      'sidebar'
    ]),
    setting:{
      get(){
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    }
  },
  methods:{
    toggleSideBar(){
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .right-menu{
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus{
      outline: none;
    }

    .right-menu-item{
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect{
        cursor: pointer;
        transition: background .3s;

        &:hover{
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
