<template>
  <el-dropdown trigger="click" @command="handleSetSize">

  </el-dropdown>
</template>

<script>
export default {
  computed:{
    size(){
      return this.$store.getters.size
    }
  },
  methods:{
    handleSetSize(){

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
