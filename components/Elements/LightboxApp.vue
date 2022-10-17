<template>
  <div class="lightbox" @click.self="onClose">
    <div>
      <elements-button-app class="lightbox-close" @click="onClose"
        ><img src="~/assets/static/icon/close.svg" alt=""></elements-button-app
      >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClose() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    transform: scale(1.5);
  }

  &-close {
    transform: scale(0.5);
    position: absolute;
    top: -20px;
    right: -30px;
  }
}
</style>
