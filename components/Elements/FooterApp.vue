<template lang="">
  <footer class="bg-primary text-light footer mt-8">
    <elements-container-app class="footer-container flex items-center gap-4">
      <elements-app-name></elements-app-name>
      <div>|</div>
      <p>&copy;copyright buith with 💖 by Ade Pranaya {{ new Date().getFullYear() }}</p>
    </elements-container-app>
  </footer>
</template>
<script>
export default {}
</script>


<style lang="scss" scoped>
.footer {
  min-height: 100px;
  margin-bottom: 24px;
  &-container {
    height: 100px;
  }
}
</style>
