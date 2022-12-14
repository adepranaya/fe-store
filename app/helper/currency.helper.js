export default {
  format(number) {
    const currency = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDN",
      maximumFractionDigits: 0,
    }).format(number)

    return currency.replace("IDN", "Rp")
  },
}
