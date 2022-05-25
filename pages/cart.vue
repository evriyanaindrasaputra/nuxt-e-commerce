<template>
  <div>
    <TabelCart v-if="cartProducts.length > 0" />
    <div v-else>
      <p>Your cart is empty</p>
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
