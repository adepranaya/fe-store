<template>
  <div>
    <h1>Halaman Products</h1>

    <organism-product-grid></organism-product-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      limit: 30,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const _page = this.page
      const _limit = this.limit
      await this.$store.dispatch('product/browse', {
        _page,
        _limit,
      })
    },
  },
}
</script>
<style lang="scss"></style>
