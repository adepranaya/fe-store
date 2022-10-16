<template>
  <div >
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
    <div v-else>
      Produk Kosong
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: (state) => state.product.items,
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
