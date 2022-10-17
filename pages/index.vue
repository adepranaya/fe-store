<template>
  <templates-product-page></templates-product-page>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    this.$store.commit('app/Set_With_Back', false)
  },
}
</script>
