export default {
  Set_Items(state, payload) {
    state.items = payload
  },
  Set_Total(state, payload) {
    state.total = parseInt(payload)
  }
}
