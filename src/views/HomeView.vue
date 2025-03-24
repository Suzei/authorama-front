<template>
  <div class="container pt-2 row-gap-3">
    <h2><i class="bi bi-house"></i> Início</h2>
    <div class="row col-12">
      <div class="dashboard-content">
        <balance-card></balance-card>
        <book-card></book-card>
        <div></div>

        <div class="d-flex flex-column">
          <div class="authors">
            <caroussel>
              <authors
                avatar_image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g"
              />
            </caroussel>
          </div>
          <div class="">
            <h4 class="d-flex align-items-center gap-2">
              <i class="bi bi-book"></i> Livros
            </h4>
            <caroussel></caroussel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Authors from "@/components/Authors/Authors.vue";
import BalanceCard from "@/components/Card/BalanceCard.vue";
import BookCard from "@/components/Card/BookCard.vue";
import Caroussel from "@/components/Caroussel/Caroussel.vue";

export default {
  components: {
    BalanceCard,
    BookCard,
    Caroussel,
    Authors,
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
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
</styles>
