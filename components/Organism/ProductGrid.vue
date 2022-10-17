<template>
  <div>
    <div v-if="loading">
      Please wait...
      <br />
    </div>
    <elements-error-app></elements-error-app>
    <div v-show="!app_error">
      <div v-if="products" class="grid">
        <elements-card-product
          v-for="(item, index) in products"
          :key="index"
          :id-product="item.id"
          :name="item.name"
          :image="getImageUrl(item)"
          :price="item.price"
        >
        </elements-card-product>
      </div>
      <div v-show="!loading && (!products || products.length === 0)">
        <elements-empty-product>
          Produk Kosong
        </elements-empty-product>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: (state) => state.product.items,
      loading: (state) => state.product.loading,
      app_error: (state) => state.app.app_error,
      app_error_message: (state) => state.app.app_error_message,
    }),
  },
  beforeDestroy() {
    this.$store.commit('product/Set_Reset')
  },
  methods: {
    getImageUrl(item) {
      if (item.images.length > 0) return item.images[0].url || ''
      return ''
    },
  },
}
</script>
