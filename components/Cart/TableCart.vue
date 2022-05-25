<template>
  <table class="cart-list">
    <thead>
      <tr class="cart-list-header">
        <th />
        <th>title</th>
        <th>price</th>
        <th>quantity</th>
        <th>total</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="cartProduct in cartProducts"
        :key="cartProduct.key"
        class="cart-list-item"
      >
        <td class="cart-list-item__image">
          <nuxt-link
            :to="{
              name: 'index'
            }"
          >
            <img :src="`${cartProduct.product.images[0]}?width=60`" />
          </nuxt-link>
        </td>
        <td>
          {{ cartProduct.product.title }}
          <span
            v-if="
              cartProduct.product.variants &&
              cartProduct.product.variants.length > 0
            "
          >
            (color: <strong>{{ cartProduct.color }}</strong
            >, size: <strong>{{ cartProduct.size }}</strong
            >)
          </span>
        </td>
        <td>{{ cartProduct.product.price }}</td>
        <td>
          <div class="cart-list-item__qty-block">
            <button
              class="cart-list-item__action dec"
              @click="
                changeQty(
                  {
                    id: cartProduct.id,
                    size: cartProduct.size,
                    color: cartProduct.color
                  },
                  'dec',
                  1
                )
              "
            >
              -
            </button>
            <span class="cart-list-item__qty-count">{{
              cartProduct.quantity
            }}</span>
            <button
              class="cart-list-item__action asc"
              @click="
                changeQty(
                  {
                    id: cartProduct.id,
                    size: cartProduct.size,
                    color: cartProduct.color
                  },
                  'add',
                  1
                )
              "
            >
              +
            </button>
          </div>
        </td>
        <td>{{ cartProduct.product.price * cartProduct.quantity }}</td>
        <td>
          <button
            class="cart-list-item__action del"
            @click="
              remove({
                id: cartProduct.id,
                size: cartProduct.size,
                color: cartProduct.color
              })
            "
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="cart-list-footer">
        <td />
        <td>Total</td>
        <td />
        <td />
        <td>{{ cartTotal }}</td>
        <td />
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'CartProductsList',
  computed: {
    cartProducts() {
      return this.$store.getters['cart/getCart']
    },
    cartTotal() {
      return this.$store.getters['cart/getTotalPriceCart']
    }
  },
  methods: {
    changeQty(unix, type, step) {
      this.$store.commit('cart/changeProductQty', { unix, type, step })
    },
    remove(unix) {
      this.$store.commit('cart/removeProduct', { unix })
    }
  }
}
</script>

<style scoped lang="scss">
@use 'sass:math';
@import '~/assets/sass/initial-variables';
@import '~/assets/sass/responsiveness';

.cart-list {
  width: 100%;
  @include md-breakpoints {
    display: block;
    overflow-x: auto;
  }
  &-header {
    & > th {
      padding: 0.5rem;
    }
  }
  &-footer {
    & > td {
      padding: 0.8rem 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  &-item {
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 1rem 0;
    text-align: center;
    strong {
      font-weight: 500;
    }
    & > td {
      padding: 1rem 0.5rem;
      @include md-breakpoints {
        min-width: math.div(($max-width-3xl), 6);
      }
      @include lg-breakpoints {
        min-width: math.div(($max-width-6xl), 6);
      }
    }
    &__image {
      img {
        max-height: 70px;
      }
    }
    &__qty {
      &-count {
        padding: 0 10px;
      }
      &-block {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__action {
      font-size: 20px;
      border: none;
      cursor: pointer;
      padding: 10px;
      border-radius: 10px;
      &.asc {
        background-color: rgb(101, 245, 76);
        color: #fff;
      }
      &.dec {
        background-color: rgb(245, 177, 76);
        color: #fff;
      }
      &.del {
        background-color: rgb(243, 62, 62);
        color: #fff;
      }
    }
  }
}
</style>
