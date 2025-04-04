<template>
  <div id="events">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="d-flex gap-3 mb-4"><i class="bi bi-calendar2-event"></i>Eventos</h2>
      <div class="d-flex gap-2">
        <input type="text" />
        <input type="date" />
      </div>
    </div>
    <div class="events-grid">
      <event-card></event-card>
      <event-card></event-card>
      <event-card></event-card>
      <event-card></event-card>
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/Card/EventCard.vue";

export default {
  components: {
    EventCard,
  },
};
</script>

<style>
.events-grid {
  display: grid;
  gap: 10px 6px;
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  justify-content: center;
}
</style>
