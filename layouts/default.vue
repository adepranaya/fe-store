<template lang="">
  <section>
    <!-- Navbar -->
    <elements-navbar-app></elements-navbar-app>
    <article class="content-app">
      <elements-container-app>
        <Nuxt />
      </elements-container-app>
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
