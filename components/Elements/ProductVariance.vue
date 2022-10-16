<template lang="">
  <div v-if="variance && variance.length > 0">
    <h3>Variances</h3>
    <elements-button-app
      v-for="(item, index) in variance"
      :key="`variance-${index}`"
      class="mr-2 text-light text-shadow"
      :style="{backgroundColor: item.size}"
    >
      {{ item.size }}
    </elements-button-app>
  </div>
</template>
<script>
export default {
  props: {
    variance: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
