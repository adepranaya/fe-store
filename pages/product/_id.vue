<template>
    <templates-product-detail></templates-product-detail>
</template>

<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'client' : 'server' }
    },
    created() {
      this.$store.commit('app/Set_With_Back', true)
    },
  }
</script>
