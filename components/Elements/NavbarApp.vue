<template lang="">
  <header class="navbar">
    <elements-container-app
      class="navbar-container flex justify-start items-center"
    >
      <elements-app-name></elements-app-name>
    </elements-container-app>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/styles/colors.scss';

.navbar {
  min-height: 100px;
  margin-bottom: 24px;
  &-container {
    height: 100px;
  }
}
</style>
