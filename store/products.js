export const state = () => ({
  products: null,
  product: null
})


export const getters = {
  getProducts(state) {
    return state.products
  },
  getProduct(state) {
    return state.product
  }
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  setProduct(state, payload) {
    state.product = payload
  }
}



export const actions = {
  async fetchProducts({ commit }) {
    try {
      const { data } = await this.$axios.get('/products')
      commit('setProducts', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetchProductById({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/products/${id}`, { params: { expand: 'variants' } })
      commit('setProduct', data)
      console.log(data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}