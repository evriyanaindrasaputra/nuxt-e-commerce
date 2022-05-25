<template>
  <nav v-if="!isMobile" class="nav" aria-label="Primary Navigation">
    <ul class="nav__list">
      <nuxt-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.slug"
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
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__list-link {
    color: $darkGrayishBlue;
    position: relative;
    transition: all 1s ease;
    padding: 20px;
    border-radius: 5px;

    &:hover {
      color: $veryDarkBlue;
      background: $light-orange;
      transition: all 1s ease;
    }
  }
}
</style>
