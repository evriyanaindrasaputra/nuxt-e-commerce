export const state = () => ({
  cart: []
})

export const getters = {
  getCart: state => state.cart,
}

export const mutations = {
  setCart(state, payload) {
    state.cart = [...state.cart, payload]
  },
  setUpdateCartItem(state, cart) {
    // find cart item by id and update quantity
    const index = state.cart.findIndex(item => item.id === cart.id)
    state.cart[index].quantity = cart.quantity
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('setCart', product)
  },
  updateCartItem({ commit }, product) {
    commit('setUpdateCartItem', product)
  }
}
