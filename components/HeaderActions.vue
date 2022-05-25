<template>
  <div class="actions">
    <div class="cart">
      <button class="cart__btn" aria-label="open cart" @click="toggleCart">
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
  props: {
    cartCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggleCart'],
  methods: {
    toggleCart() {
      this.$emit('toggleCart')
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
        height: 15px;
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
