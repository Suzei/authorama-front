<template>
  <div id="side-menu">
    <button class="btn btn-lg text-white d-flex" @click="showMenu = !showMenu">
      <i :class="!showMenu ? ' bi bi-x' : 'bi bi-list'"></i>
    </button>

    <transition name="menu">
      <keep-alive>
        <div class="box" v-if="!showMenu">
          <div></div>
          <div class="">
            <div>
              <div></div>
            </div>

            <nav class="menu-nav">
              <router-link to="/">Dashboard</router-link>
              <router-link to="/">Dashboard</router-link>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #191919;

  a {
    color: white;
  }

  .btn {
    justify-self: flex-end;
  }
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;

  height: 100%;
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
  gap: 9px;
  font-size: 18px;
}
</style>
