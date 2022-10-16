<template lang="">
  <elements-container-app v-if="item">
    <div class="product-detail">
      <div class="product-detail-images">
        <elements-product-images
          :images="item.images"
        ></elements-product-images>
      </div>
      <div class="product-detail-description">
        <h3>{{ item.name }}</h3>
        <p>{{ item.short_description }}</p>
        <h2>{{ $currency.format(item.price) }}</h2>
        <br />
        <elements-product-variance
          :variance="item.variance"
        ></elements-product-variance>
        <br />
        <elements-call-action-button>Order Now</elements-call-action-button>
      </div>
    </div>
    <br />
    <h3>Description</h3>
    <p>{{ item.description }}</p>
  </elements-container-app>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      item: (state) => state.product.item,
    }),
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const id = this.$route.params.id
      await this.$store.dispatch('product/read', {
        id,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/sizes.scss';
.product-detail {
  display: grid;
  grid-template-areas: 'product-images' 'product-description';
  // grid-template-rows: 1fr 1.5fr;
  @media screen and (min-width: $medium) {
    grid-template-areas: 'product-images product-description';
    grid-template-columns: 1fr 1.5fr;
  }
  gap: 20px;
  &-images {
    overflow: hidden;
    border-radius: 8px;
    grid-area: product-images;
  }
  &-description {
    grid-area: product-description;
  }
}
</style>
