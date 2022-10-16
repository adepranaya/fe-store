<template>
  <button
    class="btn"
    :class="`${block ? 'btn-block' : ''}`"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.btn {
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &-block {
    display: block;
    width: 100%;
  }
  border: none;
  &:hover:enabled {
    opacity: 80%;
  }
  &[disabled] {
    cursor: default;
  }
}
</style>
