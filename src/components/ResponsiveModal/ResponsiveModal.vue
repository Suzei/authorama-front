<template>
  <div
    ref="responsiveModalRef"
    v-if="showModal"
    class="modal-container vh-100 d-flex align-items-center"
  >
    <div
      @click="closeModal"
      class="bg-dark h-100 w-100 position-absolute z-0 overflow-hidden"
    ></div>
    <div
      class="container bg-body-tertiary border rounded border-1 p-4 col-6 11z-3 responsive-modal"
    >
      <button
        @click="closeModal"
        type="button"
        class="close btn position-absolute close-button"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div>
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveModal",
  props: {
    title: String,
    subtitle: String,
  },
  data: () => {
    return {
      showModal: false,
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

.responsive-modal {
  z-index: 1;
  position: relative;
  min-height: 400px;
}

.modal-container {
  animation: fadeIn 0.2s ease-in-out forwards;
}

.close-button {
  right: 0;
  top: -10px;
  font-size: 30px;
}
</style>
