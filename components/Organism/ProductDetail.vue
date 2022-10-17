<template lang="">
  <div>
    <elements-container-app v-if="loading">
      Please wait...
      <br />
    </elements-container-app>

    <elements-error-app></elements-error-app>

    <elements-container-app v-show="!loading && !item">
      <img src="~/assets/static/illustrations/undraw_empty.svg" alt="Empty" />
    </elements-container-app>
    <elements-container-app v-if="!loading && item">
      <div class="product-detail">
        <div class="product-detail-images">
          <elements-product-images
            :images="item.images"
            @zoom-in-preview="onZoomInPreview"
          ></elements-product-images>
        </div>
        <div class="product-detail-description">
          <h3>{{ item.name }}</h3>
          <p>{{ item.short_description }}</p>
          <h2>{{ $currency.format(item.price) }}</h2>
          <br />
          <elements-product-variance
            v-model="varianceSelected"
            :variance="item.variance"
          ></elements-product-variance>
          <br />
          <elements-call-action-button :additional-text="addTextOrder"
            >Order Now</elements-call-action-button
          >
        </div>
      </div>
      <br />
      <h3>Description</h3>
      <p>{{ item.description }}</p>
      <elements-lightbox-app v-if="zoomPreview" @close="onClosePreview">
        <elements-product-images
          :is-zoom="true"
          :images="item.images"
        ></elements-product-images>
      </elements-lightbox-app>
    </elements-container-app>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      zoomPreview: false,
      varianceSelected: '',
    }
  },
  computed: {
    ...mapState({
      item: (state) => state.product.item,
      loading: (state) => state.product.loading,
      app_error: (state) => state.app.app_error,
      app_error_message: (state) => state.app.app_error_message,
    }),
    addTextOrder() {
      return decodeURI(
        `${this.item.name} sebanyak [jumlah] alamat [alamat] ${
          this.varianceSelected ? 'Varian ' + this.varianceSelected : ''
        }`
      )
    },
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
    onZoomInPreview() {
      this.zoomPreview = true
    },
    onClosePreview() {
      this.zoomPreview = false
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
