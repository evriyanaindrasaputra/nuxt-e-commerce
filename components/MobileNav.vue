<template>
  <div class="mobile" :class="{ open: isOpen }" @click.self="toggleMobileMenu">
    <nav class="mobile__nav" aria-label="Mobile Navigation">
      <ul class="mobile__list">
        <nuxt-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.slug"
          class="mobile__list-item"
        >
          <span class="mobile__list-link">{{ item.name }}</span>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileNavigation',
  props: {
    isOpen: Boolean
  },
  emits: ['toggleMobileMenu'],
  data() {
    return {
      navItems: [
        {
          name: 'Men',
          slug: '/men'
        },
        {
          name: 'Woman',
          slug: '/woman'
        },
        {
          name: 'Kids',
          slug: '/kids'
        },
        {
          name: 'Unisex',
          slug: '/unisex'
        }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.$emit('toggleMobileMenu')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/initial-variables';

.mobile {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.25);
  transform: translateX(-100%);
  transition: all 0.3s ease;
  z-index: 15;
  &.open {
    transform: translateX(0);
    transition: all 0.3s ease;
  }
  &__nav {
    background: $white;
    width: 65%;
    height: 100%;
    padding: 20px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
  }
  &__list-item {
    padding: 10px;
    border-radius: 5px;
    transition: all 0.5s ease;
    text-decoration: none;
    background: red;

    &:hover {
      background: $light-orange;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__list-link {
    color: $veryDarkBlue;
    font-weight: bold;
  }
}
</style>
