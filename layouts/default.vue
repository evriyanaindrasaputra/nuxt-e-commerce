<template>
  <div class="container">
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {}
  },
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    }
  },
  created() {
    if (!this.categories) {
      this.$store.dispatch('categories/fetchCategories')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/responsiveness';
@import '~/assets/sass/initial-variables';

.container {
  margin: 0 auto;
  max-width: full;
  @include lg-breakpoints {
    max-width: $max-width-7xl;
  }
}
</style>
