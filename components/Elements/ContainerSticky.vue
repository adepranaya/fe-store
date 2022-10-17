<template>
  <div class="container-sticky">
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.container-sticky {
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
}
</style>
