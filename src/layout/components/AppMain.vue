<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view v-if="!$route.meta.link" :key="key" />
      </keep-alive>
    </transition>
  <!--  todo Iframe toggle-->
  </section>
</template>

<script>
export default {
  computed:{
    cachedViews() {
      // todo this.$store.state.tagsView.cachedViews
      return []
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
