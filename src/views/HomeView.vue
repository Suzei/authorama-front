<template>
  <div class="row row-gap-3 gx-4 p-5">
    <h2><i class="bi bi-house"></i> Início</h2>
    <div class="row">
      <div class="col-6 d-flex flex-column gap-5">
        <balance-card></balance-card>
        <balance-card></balance-card>
      </div>
      <div class="col-6 d-flex flex-column gap-5">
        <balance-card></balance-card>
        <balance-card></balance-card>
      </div>
    </div>
  </div>
</template>

<script>
import BalanceCard from "@/components/Card/BalanceCard.vue";

export default {
  components: {
    BalanceCard,
  },
  methods: {
    openModal() {
      this.$refs.responsiveModalRef.openModal();
    },

    closeModal() {
      this.$refs.responsiveModalRef.closeModal();
    },
  },
};
</script>

<styles lang="css">
.header {
  height: 120px;
}

.dashboard-content {
  display: grid;
  padding: 1rem;
  grid-template-columns: 550px 1fr;
}
</styles>
