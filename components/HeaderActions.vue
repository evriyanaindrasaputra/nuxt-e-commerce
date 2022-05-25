<template>
  <div class="actions">
    <div class="cart">
      <button class="cart__btn" @click="handleNavigateCart">
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        <img
          class="cart__icon"
          src="../assets/images/icons/icon-cart.svg"
          alt="cart icon"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderActions',
  computed: {
    cartCount() {
      // getters.getCart length
      return this.$store.getters['cart/getCart'].length
    }
  },
  methods: {
    handleNavigateCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/responsiveness';
@import '~/assets/sass/initial-variables';

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  .cart {
    margin-right: 10px;
    @include lg-breakpoints {
      margin-right: 40px;
    }

    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
      position: relative;

      .cart-count {
        position: absolute;
        top: -5px;
        right: -10px;
        background: $orange;
        color: $white;
        border-radius: 10px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
      }
    }

    &__icon {
      width: $size-icon-mobile;
      height: $size-icon-mobile;
      @include lg-breakpoints {
        width: $size-icon;
        height: $size-icon;
      }
    }
  }
}
</style>
