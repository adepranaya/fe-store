export default {
  Set_Filter_Page(state, payload) {
    state.filter._page = payload
  },
  Set_Items(state, payload) {
    state.items = payload
  },
  Set_Item(state, payload) {
    state.item = payload
  },
  Set_Total(state, payload) {
    state.total = parseInt(payload)
  },
  Set_Reset(state) {
    state.items = []
    state.total = 0
  },
}
