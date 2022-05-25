<template>
  <div class="container">
    <div class="container__inner">
      <div class="lists">
        <template v-if="products">
          <span
            v-for="product in products.results"
            :key="product.id"
            class="list"
            @click="handleSelectProduct(product)"
          >
            <div class="list__img">
              <img :src="product.images[0]" :alt="product.title" />
            </div>
            <h3 class="list__header">
              {{ product.title }}
            </h3>
            <p class="list__price">
              {{ product.price }}
            </p>
          </span>
        </template>
      </div>
    </div>
    <ModalProduct v-if="product" :showing="isModalVisible" @close="toggleModal">
      <template #header>
        <h3>{{ product.title }}</h3>
      </template>

      <template #body>
        <section class="body">
          <div class="body__image">
            <img :src="product.images[0]" :alt="product.title" />
          </div>
          <div class="body__description">
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              placeat aliquam inventore esse illo magni ullam! Fugiat
              repudiandae eaque autem harum! Architecto neque sint distinctio
              odio voluptatem autem hic ipsum.
            </p>
            <div v-if="product.variants && product.variants.length > 0">
              <div class="field">
                <label class="field__label">Select a color:</label>
                <select v-model="selectedColor" class="field__input">
                  <option
                    v-for="variant in product.variants"
                    :key="variant.id"
                    :value="variant.color"
                  >
                    {{ variant.color }}
                  </option>
                </select>
              </div>
              <div v-if="sizes.length > 0" class="radio-buttons">
                <div class="radio-buttons__header">Select a size:</div>
                <div
                  v-for="size in sizes"
                  :key="size"
                  class="radio-buttons__option"
                >
                  <input
                    :id="`size-${size}`"
                    v-model="selectedSize"
                    type="radio"
                    name="size"
                    :value="size"
                  />
                  <label :for="`size-${size}`">{{ size }}</label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>

      <template #footer>
        <button class="btn__cart">Add to Cart</button>
      </template>
    </ModalProduct>
  </div>
</template>
<script>
import ModalProduct from '~/components/Modals/ModalProduct.vue'
export default {
  components: { ModalProduct },
  data() {
    return {
      isModalVisible: false,
      selectedColor: null,
      selectedSize: null
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts']
    },
    product() {
      return this.$store.getters['products/getProduct']
    },
    sizes() {
      if (!this.selectedColor) {
        return []
      }
      const variant = this.product.variants.find(
        (item) => item.color === this.selectedColor
      )
      return variant.available_sizes.split(', ')
    }
  },
  methods: {
    async handleSelectProduct(product) {
      try {
        await this.$store.dispatch('products/fetchProductById', product.id)
        this.toggleModal()
      } catch (error) {
        console.error(error)
      }
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/sass/initial-variables';
@import '~/assets/sass/responsiveness';

.container {
  background-color: $white;
  border-radius: 10px;

  &__inner {
    max-width: $max-width-2xl;
    margin: 0 auto;
    padding: 20px;

    @include lg-breakpoints {
      max-width: $max-width-7xl;
      padding: 40px;
    }
  }

  .lists {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 40px;

    @include sm-breakpoints {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include lg-breakpoints {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include xl-breakpoints {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      column-gap: 32px;
    }

    .list {
      position: relative;
      cursor: pointer;

      &:hover > .list__img > img {
        opacity: 0.75;
      }

      &__img {
        aspect-ratio: 1/1;
        background-color: $lightGray;
        border-radius: 10px;
        overflow: hidden;
        @include xl-breakpoints {
          aspect-ratio: 7/8;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__header {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 500;
        color: $orange;
        letter-spacing: 1px;

        @include md-breakpoints {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
}
// Modal
.body {
  display: flex;
  flex-direction: column;
  gap: 2px;

  @include md-breakpoints {
    gap: 40px;
    flex-direction: row;
  }

  &__image {
    width: 100%;
    aspect-ratio: 1/1;
    background-color: $lightGray;
    border-radius: 10px;
    overflow: hidden;

    @include xl-breakpoints {
      max-width: 400px;
      aspect-ratio: 7/8;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__description {
    padding: 5px;
    @include md-breakpoints {
      padding: 0 10px;
    }

    .description {
      font-size: 12px;
      color: $darkGrayishBlue;
      letter-spacing: 1px;
      word-break: break-all;

      @include md-breakpoints {
        font-size: 18px;
      }
    }
    .field {
      display: flex;
      flex-direction: column;
      padding: 5px 0;
      margin-bottom: 5px;

      &__label {
        padding-bottom: 5px;
        font-weight: 500;
        font-size: 16px;
      }

      &__input {
        padding: 5px;
        font-size: 16px;
        border-radius: 5px;
        background: #fff;
      }
    }
    .radio-buttons {
      &__header {
        padding-bottom: 5px;
        font-weight: 500;
        font-size: 16px;
      }
      &__option {
        display: inline-block;
        border: 2px solid $darkGrayishBlue;
        border-radius: 2px;

        &:not(:last-child) {
          margin-right: 10px;
        }

        input[type='radio'] {
          display: none;
          &:checked + label {
            background: #000;
            color: #fff;
          }
        }
        label {
          display: inline-block;
          cursor: pointer;
          padding: 8px 10px;
          user-select: none;

          &:hover {
            background: #f5f4f2;
          }
        }
      }
    }
  }
}
// Footer
.btn {
  &__cart {
    background-color: $orange;
    color: $white;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: none;

    &:hover {
      transform: scale(1.05);
      background-color: $dark-orange;
    }
  }
}
</style>
