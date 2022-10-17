<template lang="">
  <div v-if="images" class="product-images">
    <img
      :class="`product-images-preview ${!isZoom ? 'zoom' : ''}`"
      :src="getPreview"
      alt=""
      @click="onZoomInPreview"
    />
    <div class="product-images-more">
      <img
        v-for="(item, index) in images"
        :key="`image-${index}`"
        :src="item.url"
        class="product-image"
        :class="`${index === currPreviewIndex ? 'active' : ''}`"
        :alt="'product-image'"
        @click="changePreview(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isZoom: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currPreviewIndex: 0,
    }
  },
  computed: {
    getPreview() {
      if (!this.images || this.images.length === 0) {
        return ''
      }
      return this.images[this.currPreviewIndex].url
    },
  },
  methods: {
    changePreview(index) {
      this.currPreviewIndex = index
    },
    onZoomInPreview() {
      if (!this.isZoom) this.$emit('zoom-in-preview', { zoomIn: true })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.product-images {
  display: grid;
  grid-template-areas: 'preview' 'images';
  grid-template-rows: 1.5fr 0.5fr;
  &-preview {
    border: 1px solid map-get($colors, lightColor);
    grid-area: preview;
    width: 100%;
    height: 200px;

    object-fit: cover;
  }
  &-preview.zoom {
      cursor: zoom-in;
    }
  &-more {
    grid-area: images;
    display: flex;
    img {
      width: calc(100% / 5);
      height: 70px;
      object-fit: cover;
    }
  }
}
.product-image {
  cursor: pointer;
  border: 1px solid map-get($colors, lightColor);
  &.active:first-child,
  &:first-child {
    border-bottom-left-radius: 10px;
  }
  &.active:nth-child(5),
  &:nth-child(5) {
    border-bottom-right-radius: 10px;
  }
  &.active {
    // box-shadow: 0px 0px 2px 2px map-get($colors, primaryColor);
    border: 2px solid map-get($colors, primaryColor);
  }
}
</style>
