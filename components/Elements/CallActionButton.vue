<template>
  <ElementsButtonApp block class="btn-primary" :href="defaultHref" target="_blank">
    <img src="~/assets/static/icons8-whatsapp-20.svg" alt="">
    <slot>Order</slot>
  </ElementsButtonApp>
</template>

<script>
export default {
  props: {
    additionalText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      phoneWA: '6285156019559',
      linkWA: 'https://api.whatsapp.com',
      textLinkWA: 'Halo+Deinuna+Saya+ingin+order+',
    }
  },
  computed: {
    defaultHref() {
      return `${this.linkWA}/send?phone=${this.phoneWA}&text=${
        this.textLinkWA
      }${decodeURI(this.additionalText)}`
    },
  },
}
</script>
