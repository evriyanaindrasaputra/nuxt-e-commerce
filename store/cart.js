export const state = () => ({
  cart: null
})

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
  }
}
