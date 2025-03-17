<template>
  <form
    class="d-flex flex-column gap-3 flex-wrap"
    @submit.prevent="onSubmit"
    autocomplete="off"
    ref="formRef"
  >
    <div class="row gap-3 col-12">
      <div class="col-lg-6 col-sm-12">
        <label for="author">Nome do autor</label>
        <select name="author" v-model="form.author" class="form-select" list="authors">
          <option :value="null">Selecione o autor registrado</option>
          <option value="Vinícius Silva">Vinícius Silva</option>
        </select>
      </div>
    </div>

    <div v-if="!form.author" class="row gap-2 col-12">
      <div class="col-lg-4 col-md-12 form-group">
        <label for="work_name" class="form-label">Nome da obra</label>
        <input
          name="work_name"
          v-model="form.work_name"
          class="form-control"
          type="text"
        />
      </div>

      <div class="col-lg-2 col-md-12 form-group">
        <label for="work_name" class="form-label">Páginas</label>
        <input v-model="form.pages" class="form-control" type="number" min="0" />
      </div>

      <div
        class="form-check col-lg-4 col-md-12 d-flex gap-2 align-items-center mt-4 form-group"
      >
        <input
          v-model="form.indie"
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Publicação independente?
        </label>
      </div>

      <div
        class="col-md-12 col-lg-4 d-flex gap-2 align-items-start flex-column form-group"
      >
        <label for="cover"></label>
        <input
          @change="onFileUpload"
          type="file"
          ref="file"
          accept=".png,,jpeg"
          name="cover"
          class="form-control form-control-file"
        />

        <div
          v-if="coverUrl"
          class="d-flex col-12 justify-content-center gap-2 p-2 align-items-center bg-secondary-subtle rounded"
        >
          <span class="text-truncate">{{ form.cover.name }}</span>
          <div class="d-flex gap-2">
            <a class="btn btn-primary" target="_blank" :href="coverUrl">Ver</a>
            <button @click="onRemoveFile" class="btn btn-outline-danger">X</button>
          </div>
        </div>
      </div>

      <div class="col-12 d-flex justify-content-end gap-2">
        <button
          type="button"
          @click="closeModal"
          class="btn btn-outline-secondary btn-md"
        >
          Cancelar
        </button>
        <button class="btn btn-primary btn-md" type="submit">Salvar</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateWork",
  data: () => {
    return {
      work: null,
      request: null,
      coverUrl: null,
      form: {
        author: null,
        work_name: null,
        pages: 0,
        indie: false,
        cover: null,
        genres: [],
      },
    };
  },

  methods: {
    onFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.form.cover = file;
        this.coverUrl = URL.createObjectURL(file);
      }
    },

    onRemoveFile() {
      this.form.cover = null;
      this.coverUrl = null;
      this.$refs.file.value = null;
    },

    closeModal() {
      this.$refs.responsiveModalRef.closeModal();
    },

    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="css" scoped></style>
