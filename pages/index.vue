<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '~/components/Products/ProductList.vue'

export default {
  name: 'IndexPage',
  components: { ProductList },
  data() {
    return {}
  },
  mounted() {
    // call action to fetch data from actions products
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>
<style lang="scss">
.coba {
  color: red;
  &:hover {
    color: blue;
  }
}
</style>
