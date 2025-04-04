<template>
  <card card_title="Saldo em conta" icon="bi bi-currency-dollar">
    <div class="row">
      <div class="col-12">
        <h1>{{ balance | formatCurrency }}</h1>
      </div>

      <div class="row pb-2">
        <span class="pb-4 text-md">Últimos orçamentos</span>
        <div class="d-flex flex-column gap-2">
          <div
            class="d-flex justify-content-between align-items-center col-12"
            v-for="spent in spents"
            :key="spent.id"
          >
            <router-link to="/" class="lead">{{ spent.name }}</router-link>
            <b>-{{ spent.price | formatCurrency }}</b>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex justify-content-end">
          <button @click="openModal" class="btn" to="/">Ver mais</button>
        </div>
      </div>
    </div>

    <view-more-modal v-if="showModal" ref="viewMoreModal" :balances="spents" />
  </card>
</template>

<script>
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
import ViewMoreModal from "../Modals/ViewMoreModal.vue";
export default {
  components: {
    Card,
    RouterLink,
    ViewMoreModal,
  },

  data: () => {
    return {
      balance: 203,
      showModal: false,
      spents: [
        {
          id: 1,
          name: "O Auto da Comparecida",
          price: 120,
        },

        {
          id: 2,
          name: "O Auto da Comparecida",
          price: 1000,
        },

        {
          id: 3,
          name: "O Auto da Comparecida",
          price: 1009,
        },
      ],
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
      this.$nextTick(() => {
        this.$refs.viewMoreModal.openModal();
      });
    },
  },
};
</script>

<style></style>
