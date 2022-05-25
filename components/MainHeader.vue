<template>
  <div class="header__container">
    <header class="header">
      <div class="header__inner">
        <BurgerBtn
          :is-open="isOpen"
          :is-mobile="isMobile"
          @toggleMobileMenu="toggleMobileMenu"
        />
        <div class="brand">
          <nuxt-link class="brand__link" to="/">
            <img
              class="brand__logo"
              src="https://cdn.cdnlogo.com/logos/n/67/nike.svg"
              alt="logo Brand"
            />
          </nuxt-link>
        </div>
        <MainNav :is-mobile="isMobile" />
        <HeaderActions />
      </div>
    </header>
    <MobileNav :is-open="isOpen" @toggleMobileMenu="toggleMobileMenu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      isOpen: false
    }
  },
  mounted() {
    this.detectWidth()
    window.addEventListener('resize', this.detectWidth)
  },
  methods: {
    detectWidth() {
      if (window.innerWidth > 727) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
    },
    toggleMobileMenu() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'scroll'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/sass/responsiveness';
@import '~/assets/sass/initial-variables';

.header__container {
  padding: 10px 20px;
  @include lg-breakpoints {
    padding: 45px 20px;
  }

  .header {
    position: relative;
    padding-bottom: 0;
    @include lg-breakpoints {
      padding-bottom: 25px;
    }

    .brand {
      margin-right: 0;
      @include lg-breakpoints {
        margin-right: 50px;
      }

      &__link {
        display: inline-block;
      }
      &__logo {
        width: $size-icon-mobile-logo;
        height: $size-icon-mobile-logo;
        @include lg-breakpoints {
          width: $size-icon-logo;
          height: $size-icon-logo;
        }
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: $lightGray;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: none;

        @include lg-breakpoints {
          display: block;
        }
      }
    }

    &__inner {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
