<template>
  <responsive-modal ref="responsiveModalRef">
    <div slot="content">
      <div
        class="d-flex justify-content-between align-items-center"
        v-for="balance in balances"
        :key="balance.id"
      >
        <span class="lead">{{ balance.name }}</span>
        <b>{{ balance.price | formatCurrency }}</b>
      </div>
    </div>
  </responsive-modal>
</template>

<script>
import ResponsiveModal from "../ResponsiveModal/ResponsiveModal.vue";

export default {
  components: {
    ResponsiveModal,
  },
  props: ["balances"],
  data: () => {
    return {
      showModal: false,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
      this.$nextTick(() => {
        this.$refs.responsiveModalRef.modalState();
      });
    },
    closeModal() {
      this.showModal = false;
    },
  },

  mounted() {
    console.log("montado.");
  },
};
</script>

<style lang=""></style>
