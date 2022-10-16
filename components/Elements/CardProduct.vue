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
      <ElementsButtonApp block class="btn-primary">Hubungi</ElementsButtonApp>
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
}
</script>
<style lang="scss" scoped>
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
    padding: 6px 12px 18px;
  }
}
</style>
