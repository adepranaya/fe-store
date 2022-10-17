<template>
  <div>
    <elements-container-sticky>
      <elements-container-app class="py-5 flex justify-space-between flex-wrap">
        <h2>All Products</h2>
        <input
          v-model="search"
          type="search"
          placeholder="Search product..."
          class="search-product"
          @keyup="onSearch"
        />
      </elements-container-app>
    </elements-container-sticky>

    <!-- content products -->
    <elements-container-app class="pt-5">
      <organism-product-grid></organism-product-grid>
      <elements-pagination-app
        :current-page="filter._page"
        :limit="filter._limit"
        :total="total"
        @change-page="changePage"
      ></elements-pagination-app>
    </elements-container-app>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState({
      filter: (state) => state.product.filter,
      total: (state) => state.product.total,
    }),
  },
  watch: {
    'filter._page'(val) {
      this.getData()
    },
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
    async onSearch() {
      const { _limit } = this.filter
      await this.$store.dispatch('product/browse', {
        _page: 1,
        _limit,
        name_like: this.search || undefined,
      })
    },
    changePage(pageNumber) {
      this.$store.commit('product/Set_Filter_Page', pageNumber)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/sizes.scss';
@media screen and (max-width: $medium) {
  .search-product {
    width: 100%;
  }
}
</style>
