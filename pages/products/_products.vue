<template>
  <div>
    <div class="header">
      <h3>{{ product.title }}</h3>
    </div>
    <section class="body">
      <div class="body__image">
        <img :src="product.images[0]" :alt="product.title" />
      </div>
      <div class="body__description">
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          placeat aliquam inventore esse illo magni ullam! Fugiat repudiandae
          eaque autem harum! Architecto neque sint distinctio odio voluptatem
          autem hic ipsum.
        </p>

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
          <div v-for="size in sizes" :key="size" class="radio-buttons__option">
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
        <!-- price -->
        <div class="price">
          <label class="price__label">Price:</label>
          <span class="price__value">
            {{ product.price }}
          </span>
        </div>
      </div>
    </section>

    <button class="btn__cart" @click="handleAddToCart">Add to Cart</button>
  </div>
</template>
