<template>
  <div>
    <div v-if="cartProducts.length > 0">
      <TabelCart />
    </div>
    <div v-else>
      <p class="cart-empty">Your cart is empty</p>
    </div>
  </div>
</template>
<script>
import TabelCart from '~/components/Cart/TableCart.vue'
export default {
  name: 'CartProductsList',
  components: { TabelCart },
  data() {
    return {}
  },
  computed: {
    cartProducts() {
      return this.$store.getters['cart/getCart']
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-empty {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
}
</style>
