<template>
  <elements-container-app
    v-show="app_error"
    class="flex justify-center items-center"
  >
    <div>
      <img
        src="~/assets/static/illustrations/undraw_server_down.svg"
        alt="Error"
        width="500"
      />
      <br />
      <p class="text-center">{{ app_error_message }}</p>
      <br />
    </div>
  </elements-container-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      app_error: (state) => state.app.app_error,
      app_error_message: (state) => state.app.app_error_message,
    }),
  },
}
</script>
