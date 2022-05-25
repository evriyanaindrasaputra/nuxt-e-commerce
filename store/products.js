export const state = () => ({
  products: null,
  product: null,
  isLoading: false,
})


export const getters = {
  getProducts(state) {
    return state.products
  },
  getProduct(state) {
    return state.product
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  setProduct(state, payload) {
    state.product = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}



export const actions = {
  async fetchProducts({ commit }, filter) {
    try {
      commit('setLoading', true)
      const { data } = await this.$axios.get('/products', { params: { filter } })
      commit('setProducts', data)
      return data
    } catch (error) {
      throw new Error(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async fetchProductById({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/products/${id}`, { params: { expand: 'variants' } })
      commit('setProduct', data)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}