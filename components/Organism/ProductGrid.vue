<template>
  <div>
    <elements-card-product v-for="(item, index) in products" :key="index">
    </elements-card-product>
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
}
</script>
