<template lang="">
  <header class="navbar">
    <elements-container-app
      class="navbar-container flex justify-start items-center"
    >
      <elements-button-app v-show="with_back" href="/" class="back-btn">
        <img src="~/assets/static/icon/back.svg" alt="" srcset="" />
      </elements-button-app>
      <elements-logo-app></elements-logo-app>
    </elements-container-app>
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      with_back: (state) => state.app.with_back,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/sizes.scss';

.navbar {
  min-height: 100px;
  // margin-bottom: 24px;
  &-container {
    height: 100px;
  }
  .back-btn {
    display: flex;
    @media screen and (min-width: $medium) {
      display: none;
    }
  }
}
</style>
