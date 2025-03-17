<template>
  <div class="d-flex col-12 flex-column">
    <h2>É O TEMPLATE</h2>
  </div>
</template>

<script>
export default {
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
