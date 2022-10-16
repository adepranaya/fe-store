<template>
  <div v-if="totalPage" class="flex justify-center pagination gap-2">
    <elements-button-app
      class="pagination-btn"
      :disabled="isActive(1)"
      @click="onChangePage(currentPage-1)"
    >
      &lt;
    </elements-button-app>
    <elements-button-app
      v-for="(pageNumber, index) in totalPage"
      :key="index"
      class="pagination-btn"
      :class="isActive(pageNumber) ? 'active' : ''"
      :disabled="isActive(pageNumber)"
      @click="onChangePage(pageNumber)"
    >
      {{ pageNumber }}
    </elements-button-app>
    <elements-button-app
      class="pagination-btn"
      :disabled="isActive(totalPage)"
      @click="onChangePage(currentPage+1)"
    >
      &gt;
    </elements-button-app>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPage() {
      if (!this.total || !this.limit) {
        return 0
      }
      return Math.ceil(this.total / this.limit)
    },
  },
  methods: {
    onChangePage(pageNumber) {
      this.$emit('change-page', pageNumber)
    },
    isActive(pageNumber) {
      return this.currentPage === pageNumber
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';

.pagination {
  margin: 24px 16px;
  &-btn {
    box-shadow: 0px 5px 30px rgba(196, 196, 196, 0.4);
    background-color: white;
    width: 32px;
    height: 32px;
    &.active {
      background-color: map-get($colors, primaryColor);
      color: map-get($colors, lightColor);
    }
  }
}
</style>
