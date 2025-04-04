<template>
  <div id="side-menu">
    <button class="btn btn-lg text-white" @click="showMenu = !showMenu">
      <i :class="!showMenu ? ' bi-chevron-left' : 'bi bi-list'"></i>
    </button>
    <transition name="menu">
      <keep-alive>
        <div class="box" v-if="!showMenu">
          <div></div>
          <div class="">
            <div>
              <div></div>
            </div>

            <nav>
              <h2 class="d-flex gap-2 align-items-center">
                <i class="bi bi-book"></i>Authorama
              </h2>
              <router-link to="/"><i class="bi bi-house"></i>Dashboard</router-link>
              <router-link to="/authors">
                <i class="bi bi-people"></i>Autores</router-link
              >
              <router-link to="/books"><i class="bi bi-journal"></i>Obras</router-link>
              <router-link to="/events"
                ><i class="bi bi-calendar2-event"></i>Eventos</router-link
              >
            </nav>
          </div>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "SideMenu",
  components: {
    RouterLink,
  },
  data: () => {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#side-menu {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #191919;

  button {
    display: flex;
    align-self: flex-start;
  }
}

.box {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100%;
  min-height: 100vh;
}

.menu-enter-active,
.menu-leave-active {
  transition: width 0.5s;
}

.menu-enter,
.menu-leave-to {
  width: 100%;
}

.menu-enter-to,
.menu-leave {
  width: 0%;
}
nav {
  display: flex;
  justify-self: flex-start;
  flex-direction: column;
  width: 100%;
  color: white;

  .router-link-active {
    background-color: white;
    color: #191919;
  }

  a {
    color: white;
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 10px;
    font-size: 1.1rem;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    &:hover {
      background: white;
      color: #191919;
    }
  }
}
</style>
