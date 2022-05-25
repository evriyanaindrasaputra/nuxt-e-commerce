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
    const index = state.cart.findIndex(item => item.id === cart.id)
    state.cart[index].quantity = cart.quantity
  },
  changeProductQty(state, payload) {
    // find cart item by id and update quantity
    const index = state.cart.findIndex(item => item.id === payload.id)
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
