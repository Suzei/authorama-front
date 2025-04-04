import Vue from "vue";

Vue.filter('formatCurrency', (value) => {
  if (!value) return;

  const currency = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return currency;
})