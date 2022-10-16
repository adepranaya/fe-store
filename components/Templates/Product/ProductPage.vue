<template>
  <elements-container-app>
    <h2>All Products</h2>
    <br>
    <organism-product-grid></organism-product-grid>
    <elements-pagination-app
      :current-page="filter._page"
      :limit="filter._limit"
      :total="total"
      @change-page="changePage"
    ></elements-pagination-app>
  </elements-container-app>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      filter: (state) => state.product.filter,
      total: (state) => state.product.total,
    }),
  },
  watch: {
    'filter._page'(val) {
      this.getData()
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { _page, _limit } = this.filter
      await this.$store.dispatch('product/browse', {
        _page,
        _limit,
      })
    },
    changePage(pageNumber) {
      this.$store.commit('product/Set_Filter_Page', pageNumber)
    }
  },
}
</script>
<style lang="scss" scoped></style>
