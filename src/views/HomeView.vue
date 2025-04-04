<template>
  <div class="row-gap-3">
    <h2 class="py-2"><i class="bi bi-house"></i> Início</h2>
    <div class="row col-12">
      <div class="dashboard-content">
        <balance-card></balance-card>
        <book-card></book-card>
        <div>
          <avaliable-balance-card></avaliable-balance-card>
        </div>

        <div class="d-flex flex-column">
          <div class="authors">
            <caroussel>
              <authors v-for="author in authors" :author="author" :key="author.id" />
            </caroussel>
          </div>
          <div class="">
            <caroussel>
              <book
                v-for="book in books"
                :key="book.id"
                :name="book.name"
                :image="book.image"
              />
            </caroussel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvaliableBalanceCard from "@/components/Card/AvaliableBalanceCard.vue";
import BalanceCard from "@/components/Card/BalanceCard.vue";
import BookCard from "@/components/Card/BookCard.vue";
import Authors from "@/components/Caroussel/Authors.vue";
import Book from "@/components/Caroussel/Book.vue";
import Caroussel from "@/components/Caroussel/Caroussel.vue";

export default {
  components: {
    BalanceCard,
    BookCard,
    AvaliableBalanceCard,
    Caroussel,
    Authors,
    Book,
  },
  data: () => {
    return {
      books: null,
      authors: null,
    };
  },
  methods: {
    openModal() {
      this.$refs.responsiveModalRef.openModal();
    },

    closeModal() {
      this.$refs.responsiveModalRef.closeModal();
    },
  },

  mounted() {
    this.books = [
      {
        id: 1,
        name: "O Evangelho em Sangue",
        image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      },

      {
        id: 2,
        name: "O Hobbit",
        image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      },

      {
        id: 3,
        name: "O Hobbit",
        image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      },

      {
        id: 4,
        name: "O Hobbit",
        image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      },

      {
        id: 5,
        name: "O Hobbit",
        image: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
      },
    ];

    this.authors = [
      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },

      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },

      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },

      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },

      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },

      {
        name: "Tolkien",
        workCount: "12",
        avatar_image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLJAwSSHNA63vmwu623ONomzdAfJs_oNgMWEIleEkbKFjVLBkMjRGCYC1e23dc0CWF8-SigE1btjrn1-ycf7n37g",
      },
    ];
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
