<template>
  <div class="container">
    <MainHeader
      :cart-products="cartProducts"
      :is-empty="isEmpty"
      :opened-cart="openedCart"
      :cart-count="cartProducts.length"
      @toggleCart="toggleCart"
      @deleteItem="deleteItem"
    />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      cartProducts: [],
      product: {
        id: '1',
        title: 'Fall limited Edition Sneakers ',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything theweather can offer.',
        newPrice: 125.0,
        discount: 50,
        oldPrice: 250.0
      },
      isEmpty: true,
      count: 0,
      openedCart: false
    }
  },
  created() {
    if (this.cartProducts.length) {
      this.isEmpty = false
    }
    this.count = 0
  },
  methods: {
    toggleCart() {
      this.openedCart = !this.openedCart
    },
    deleteItem(id) {
      this.cartProducts = this.cartProducts.filter(
        (product) => (product.id = id)
      )
      if (!this.cartProducts.length) {
        this.isEmpty = true
      }
    },
    increaseCount() {
      this.count += 1
    },
    decreaseCount() {
      this.count -= 1
      if (this.count < 1) {
        this.count = 0
      }
    },
    addToCart(id) {
      const cartProduct = {
        id: this.product.id,
        title: this.product.title,
        newPrice: this.product.newPrice.toFixed(2),
        count: this.count < 1 ? 1 : this.count
      }
      if (this.cartProducts.length) {
        this.cartProducts.forEach((product) => {
          if (id === product.id && this.count === 0) {
            product.count += this.count + 1
          } else {
            product.count += this.count
          }
        })
      } else {
        this.cartProducts.push(cartProduct)
        this.isEmpty = false
      }
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
