<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex justify-content-between align-items-center">
      <h2>Livros cadastrados</h2>
      <div>
        <input type="text" />
      </div>
    </div>
    <div class="d-flex flex-wrap gap-5">
      <div class="d-flex flex-column align-items-center">
        <img
          class="book-image"
          src="https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
        />
        <span>O Hobbit</span>
        <span class="">J.R.R Tolkien</span>
        <div class="book-trend">
          <i class="bi bi-calendar d-flex gap-1 align-items-center"> 0 eventos</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book-view",
};
</script>

<style lang="scss">
.book-image {
  height: 300px;
  width: 200px;
}

.book-trend {
  i {
    border-radius: 9999px;
    padding: 5px 7px;
  }

  .hot {
    color: red;
  }

  .calendar {
  }
}
</style>
