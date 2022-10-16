<template lang="">
  <section>
    <!-- Navbar -->
    <elements-navbar-app></elements-navbar-app>
    <article class="content-app">
      <Nuxt />
    </article>

    <!-- Footer -->
    <elements-footer-app></elements-footer-app>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content-app {
  min-height: 78vh;
}
</style>
