<template>
  <aside id="side-menu" class="col-3 shadow rounded-3 aside-menu bg-ligth">
    <div class="d-flex gap-3 flex-column align-items-center pb-4">
      <div class="avatar-image">
        <img src="../../assets/satriani.webp" alt="..." />
      </div>
      <span class="user-name">Joe Satriani</span>
    </div>

    <div class="d-flex flex-column align-items-center pb-5">
      <span class="display-6 font-weight-bold">3213</span>
      <span class="text-muted lead">Leitores</span>
    </div>

    <nav class="nav flex-column gap-4">
      <router-link to="/" class="nav-link"><i class="bi bi-book"></i> Livros</router-link>
      <router-link to="/about" class="nav-link"
        ><i class="bi bi-people-fill"></i> Autores</router-link
      >
      <router-link to="/events" class="nav-link"
        ><i class="bi bi-calendar-event"></i> Eventos</router-link
      >
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style lang="scss" scoped>
#side-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 350px;

  background-color: white;

  .nav-link {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: black;
    gap: 1rem;

    &:hover {
      color: #6c757d;
      cursor: pointer;
    }
  }

  .user-name {
    font-weight: 700;
    font-size: 16px;
  }
}

.avatar-image {
  height: 150px;
  width: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100%;
  }
}
</style>
