<template lang="">
  <div v-if="variance && variance.length > 0">
    <h3>Variances</h3>
    <div class="flex">
      <elements-button-app
        v-for="(item, index) in variance"
        :key="`variance-${index}`"
        class="mr-2 text-light text-shadow"
        :class="value === item.size ? 'variance-active' : 'variance'"
        :style="{ backgroundColor: item.size }"
        @click="onClick(item)"
      >
        {{ item.size }}
      </elements-button-app>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    variance: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick(item) {
      this.$emit('input', item.size)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/colors.scss';
.variance {
  &-active {
    box-shadow: 0 0 2px 2px map-get($map: $colors, $key: primaryColor);
  }
}
</style>
