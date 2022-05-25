<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '~/components/Products/ProductList.vue'

export default {
  name: 'CategoryPage',
  components: { ProductList },
  computed: {
    categoryId() {
      return this.$route.params.category.split('-').slice(-1).pop()
    }
  },
  mounted() {
    const filter = {
      category: this.categoryId
    }
    this.$store.dispatch('products/fetchProducts', filter)
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
