<template>
  <component
    :is="!href ? 'button' : 'a'"
    :href="href"
    class="btn"
    :class="`${block ? 'btn-block' : ''}`"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
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
