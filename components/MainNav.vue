<template>
  <nav v-if="!isMobile" class="nav" aria-label="Primary Navigation">
    <ul class="nav__list">
      <nuxt-link
        v-for="item in navItems"
        :key="item.name"
        :to="{
          name: 'categories-category',
          params: { category: `${item.slug}-${item.id}` }
        }"
        class="nav__list-item"
      >
        <span class="nav__list-link">{{ item.name }}</span>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    isMobile: Boolean
  },
  data() {
    return {
      navItems: [
        {
          name: 'T-shirts',
          slug: 't-shirts',
          id: 'Ro3bnjx'
        },
        {
          name: 'Jackets',
          slug: 'jackets',
          id: '5xARezo'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/responsiveness';
@import '~/assets/sass/initial-variables';

.nav {
  &__list {
    display: flex;
    align-items: center;
  }

  &__list-item {
    padding: 20px;
    border-radius: 5px;
    transition: all 1s ease;

    &:not(:last-child) {
      margin-right: 30px;
    }
    &:hover {
      color: $veryDarkBlue;
      background: $light-orange;
      transition: all 1s ease;
    }
    &.nuxt-link-active {
      color: $veryDarkBlue;
      background: $light-orange;
    }
  }

  &__list-link {
    color: $darkGrayishBlue;
  }
}
</style>
