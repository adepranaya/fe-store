<template lang="">
  <div class="card">
    <nuxt-link :to="`/product/${idProduct}`">
      <!-- image -->
      <img class="card-thumbnail" :src="image" :alt="name" />
      <div class="card-content">
        <!-- name of product -->
        <div>{{ name }}</div>
        <!-- price -->
        <div>{{ $currency.format(price) }}</div>
      </div>
    </nuxt-link>
    <!-- actions -->
    <div class="card-actions">
      <elements-call-action-button :additional-text="addTextOrder">
        Order
      </elements-call-action-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    idProduct: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '-',
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    addTextOrder() {
      return decodeURI(`${this.name} sebanyak [jumlah] alamat [alamat]`)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.card {
  background: #fff;
  a {
    text-decoration: none;
    color: black;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 5px 30px rgba(196, 196, 196, 0.4);
  border-radius: 16px;
  overflow: hidden;
  & &-thumbnail {
    grid-area: image;
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  & &-content {
    padding: 6px 12px;
  }
  & &-actions {
    a {
      text-align: center;
      color: map-get($map: $colors, $key: lightColor);
    }
    padding: 6px 12px 18px;
  }
}
</style>
