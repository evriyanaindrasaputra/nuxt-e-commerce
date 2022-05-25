<template>
  <div v-if="isMobile" class="burger" :isMobile="isMobile">
    <button class="burger__btn" @click="toggleMobileMenu">
      <img
        :src="!isOpen ? openIcon : closeIcon"
        :isOpen="isOpen"
        class="burger__icon"
        alt="burger icon"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BurgerButton',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleMobileMenu'],
  data() {
    return {
      openIcon: require('@/assets/images/icons/icon-menu.svg'),
      closeIcon: require('@/assets/images/icons/icon-close.svg')
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
@import '~/assets/sass/responsiveness';
@import '~/assets/sass/initial-variables';

.burger {
  margin-right: 15px;
  z-index: 2;
  &__btn {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    object-fit: cover;
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
</style>
