export const state = () => ({
  cart: []
})

export const getters = {
  getCart: state => state.cart,
  getTotalPriceCart: state => {
    let total = 0
    state.cart.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }
}

export const mutations = {
  setCart(state, payload) {
    state.cart = [...state.cart, payload]
  },
  setUpdateCartItem(state, cart) {
    // find cart item by id and update quantity
    const index = state.cart.findIndex(item => item.id === cart.id && item.size === cart.size && item.color === cart.color)
    state.cart[index].quantity = cart.quantity
  },
  changeProductQty(state, payload) {
    // find cart item by id and update quantity
    const index = state.cart.findIndex(item => item.id === payload.unix.id && item.size === payload.unix.size && item.color === payload.unix.color)
    if (payload.type === 'add') {
      return state.cart[index].quantity++
    } else if (payload.type === 'dec') {
      // check if quantity is 1, if so remove item from cart
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1)
      } else {
        state.cart[index].quantity--
      }
    }
  },
  removeProduct(state, payload) {
    const index = state.cart.findIndex(item => item.id === payload.unix.id && item.size === payload.unix.size && item.color === payload.unix.color)
    state.cart.splice(index, 1)
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
