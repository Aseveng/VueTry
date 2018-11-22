export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: (state, payload) => {
      state.count = state.count + payload.amount
      return state.count
    },
    decrement: state => state.count--
  }
}
