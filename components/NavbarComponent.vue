<template>
  <nav>
    <div class="navbar">
      <!-- Logo Here -->
      <nuxt-link to="/" class="navbar__logo">
        <img
          class=""
          src="https://cdn.cdnlogo.com/logos/n/67/nike.svg"
          alt="logo_brand"
        />
      </nuxt-link>
      <ul class="navbar__menu">
        <!-- Menu Here -->
        <li><nuxt-link to="/">New Release</nuxt-link></li>
        <li><nuxt-link to="/men">Men</nuxt-link></li>
        <li><nuxt-link to="/woman">Woman</nuxt-link></li>
        <li><nuxt-link to="/kids">Kids</nuxt-link></li>
        <li><nuxt-link to="/Unisex">Unisex</nuxt-link></li>
      </ul>
      <nuxt-link to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span v-if="cart > 0" class="navbar__cart-count">
          {{ cart }}
        </span>
      </nuxt-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      cart: 0
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/sass/initial-variables';
@import '~/assets/sass/responsiveness';

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__logo {
    width: 100px;
    height: 100px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &__menu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    list-style: none;

    li {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
    a {
      text-transform: capitalize;
    }
  }
  .icon {
    width: $size-icon-mobile;
    height: $size-icon-mobile;
    @include lg-breakpoints {
      width: $size-icon;
      height: $size-icon;
    }
  }
}
</style>
