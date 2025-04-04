<template>
  <Card card_title="" icon="">
    <div class="d-flex flex-column">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="m-0">
          Lançamento - <router-link to="/">os três mosqueteiros</router-link>
        </h5>
        <div class="d-flex gap-3 align-self-end">
          <i class="bi bi-pencil"></i>
          <i class="bi bi-trash text-danger"></i>
        </div>
      </div>
      <div class="d-flex flex-column gap-2">
        <span>Data: 22/12 às 9h</span>
        <span title="" class="text-truncate">
          Descrição:
          >Descrição:>Descrição:>Descrição:>Descrição:>Descrição:>Descrição:>Descrição:>Descrição:>Descrição:
          Descrição:Descrição:Descrição::Descrição:Descrição::Descrição:Descrição::Descrição:Descrição::Descrição:Descrição::Descrição:Descrição::Descrição:Descrição:
        </span>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "event-card",
  components: {
    Card,
  },
};
</script>
