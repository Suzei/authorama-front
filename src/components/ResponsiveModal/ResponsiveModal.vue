<template>
  <transition name="modal">
    <div
      v-if="showModal"
      class="modal-container position-absolute vw-100 vh-100 d-flex align-items-center"
    >
      <div @click="modalState" class="bg-dark h-100 w-100 position-absolute z-0"></div>
      <div
        class="container bg-body-tertiary border rounded border-1 p-4 col-6 11z-3 responsive-modal"
      >
        <button
          @click="modalState"
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
  </transition>
</template>

<script>
export default {
  name: "ResponsiveModal",
  props: {
    title: String,
    subtitle: String,
    componentRef: String,
  },
  data: () => {
    return {
      showModal: false,
    };
  },

  methods: {
    modalState() {
      this.showModal = !this.showModal;
      window.scrollTo({ top: "100%" });
    },
  },

  mounted() {
    console.log("i was mounted");
  },

  updated() {
    console.log("foi atualizado algum estado dentro dele.");
  },
};
</script>

<style lang="scss">
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

body.modal-open {
  height: 100%;
  overflow: hidden;
}

.modal-container {
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.responsive-modal {
  z-index: 1;
  position: relative;
  min-height: 400px;
}

.close-button {
  right: 0;
  top: -10px;
  font-size: 30px;
}
</style>
